#!/usr/bin/env node

/**
 * Script to clone llama.cpp repository and download the specified LLaMA model from Hugging Face Hub.
 * Uses CommonJS modules and supports spinner feedback.
 * Requires Node.js 18+.
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { downloadFile } = require('@huggingface/hub');

const PROJECT_ROOT = path.join(__dirname, '..');
const LLAMA_PATH = path.join(PROJECT_ROOT, 'llama.cpp');
const MODEL_PATH = path.join(LLAMA_PATH, 'models');
const MODEL_FILE = "Llama-3.2-1B-Instruct-Q4_K_M.gguf";

const spinnerFrames = ["|", "/", "-", "\\"];
let spinnerIndex = 0;

const startSpinner = (text = "Downloading") =>
  setInterval(() => {
    process.stdout.write(`\r${spinnerFrames[spinnerIndex++ % spinnerFrames.length]} ${text}`);
  }, 120);

const stopSpinner = (interval, text = "Done") => {
  clearInterval(interval);
  process.stdout.write(`\r✓ ${text}\n`);
};

(async () => {
  try {
    if (!fs.existsSync(LLAMA_PATH)) {
      console.log('Cloning llama.cpp...');
      const clone = spawn(
        'git',
        ['clone', '--depth', '1', '--branch', 'master', 'https://github.com/ggerganov/llama.cpp.git', 'llama.cpp'],
        { stdio: 'inherit', shell: true, cwd: PROJECT_ROOT }
      );

      await new Promise((resolve, reject) => {
        clone.on('close', code => code === 0 ? resolve() : reject(new Error('Failed to clone llama.cpp')));
      });

      console.log('✓ llama.cpp cloned\n');
    } else {
      console.log('llama.cpp already exists. Skipping clone.\n');
    }

    const modelFilePath = path.join(MODEL_PATH, MODEL_FILE);
    if (!fs.existsSync(modelFilePath)) {
      const spinner = startSpinner();

      try {
        const blob = await downloadFile({
          repo: "bartowski/Llama-3.2-1B-Instruct-GGUF",
          path: MODEL_FILE,
        });

        if (!blob) throw new Error(`File ${MODEL_FILE} not found in Hugging Face repository.`);

        const buffer = Buffer.from(await blob.arrayBuffer());
        fs.mkdirSync(MODEL_PATH, { recursive: true });
        fs.writeFileSync(modelFilePath, buffer);

        stopSpinner(spinner, "Download completed");
        console.log("Saved to:", modelFilePath);
      } catch (err) {
        stopSpinner(spinner, "Failed");
        throw err;
      }
    } else {
      console.log('Model already exists. Skipping download.\n');
    }
  } catch (err) {
    console.error('[hf.cjs]:', err);
    process.exit(1);
  }
})();
