import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './global/AppProvider';
import './style/styles.css';
import './style/colors.css';
import './style/theme.css';
import './style/fonts.css';
import Chat from './components/layout/chat/Chat';
import Home from './components/layout/home/Home';
import CustomUI from './components/layout/custom-model/CustomUI';
import Control from './components/second-window/ctrl/Control';
import InterfaceConfig from './components/layout/config-hub/InterfaceConfig'

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/custom" element={<CustomUI />} />
          <Route path="/models" element={<Home />} />
          <Route path="/control" element={<Control />} />
          <Route path="/configs" element={<InterfaceConfig />} />
          <Route path="/doc" element={<InterfaceConfig />} />
          <Route path="//contributions" element={<InterfaceConfig />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
