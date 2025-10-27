import React from 'react';
import AIButton from '../components/common/AIButton.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const DemoPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          AI Button Demo
        </h1>
        
        <div className="space-y-8">
          {/* Default Button */}
          <div className="space-y-2">
            <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Default AI Button
            </h2>
            <AIButton onClick={() => alert('Button clicked!')}>
              Get Started
            </AIButton>
          </div>

          {/* Custom Styled Button */}
          <div className="space-y-2">
            <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Custom Styled AI Button
            </h2>
            <AIButton 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => alert('Custom button clicked!')}
            >
              Explore AI Courses
            </AIButton>
          </div>

          {/* Theme Toggle */}
          <div className="space-y-2">
            <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Theme Toggle
            </h2>
            <AIButton 
              className={theme === 'dark' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-800 hover:bg-gray-900'}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              Toggle Theme
            </AIButton>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-12">
          <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Usage Example
          </h2>
          <pre className={`p-4 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
          }`}>
            {`import AIButton from '../components/common/AIButton';

// Default usage
<AIButton onClick={() => console.log('Clicked!')}>
  Get Started
</AIButton>

// Custom styled
<AIButton 
  className="bg-purple-600 hover:bg-purple-700"
  onClick={() => console.log('Custom clicked!')}
>
  Explore AI Courses
</AIButton>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DemoPage; 