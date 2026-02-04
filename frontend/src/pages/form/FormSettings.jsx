import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SettingSection = ({ title, description, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0 bg-white">
      <div
        className="p-4 sm:p-6 flex items-start gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <div className="flex-grow">
          <div className="text-base text-gray-800 font-normal mb-1">{title}</div>
          {description && <div className="text-sm text-gray-500">{description}</div>}
        </div>
        {children ? (
          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        ) : null}
      </div>
      {isOpen && children && (
        <div className="px-6 pb-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  )
}

const Toggle = ({ checked, onChange }) => (
  <button
    onClick={() => onChange(!checked)}
    className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out shrink-0 ${checked ? 'bg-blue-600' : 'bg-gray-300'}`}
  >
    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-200 ease-in-out ${checked ? 'translate-x-4' : 'translate-x-0'}`} />
  </button>
)


function FormSettings() {

  const [sections, setSections] = useState({
    quiz: false,
    responses: true,
    presentation: false,
  });

  const toggleSection = (key) => {
    setSections(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const [settings, setSettings] = useState({
    makeQuiz: false,
    collectEmails: true,
    allowEditing: false,
    limitOneResponse: false,
    showProgressBar: false,
    shuffleOrder: false,
  });

  const updateSetting = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className='max-w-3xl mx-auto mt-6 pb-20 px-4'>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className='p-4 sm:p-6 flex items-center justify-between hover:bg-gray-50 border-b border-gray-200 transition-colors bg-white'>
          <div>
            <div className="text-base text-gray-800 font-normal mb-1">Make this a quiz</div>
            <div className="text-sm text-gray-500">Assign point values, set answers, and automatically provide feedback</div>
          </div>
          <Toggle checked={settings.makeQuiz} onChange={() => updateSetting('makeQuiz')} />
        </div>

        <SettingSection
          title="Responses"
          description="Manage how responses are collected and protected"
          isOpen={sections.responses}
          onClick={() => toggleSection('responses')}
        >
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">Collect email addresses</div>
              <div className='w-48'>
                <select className="w-full text-sm border-gray-300 rounded border p-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Do not collect</option>
                  <option>Verified</option>
                  <option>Responder input</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">Allow response editing</div>
              <Toggle checked={settings.allowEditing} onChange={() => updateSetting('allowEditing')} />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">Limit to 1 response</div>
              <Toggle checked={settings.limitOneResponse} onChange={() => updateSetting('limitOneResponse')} />
            </div>
          </div>
        </SettingSection>

        <SettingSection
          title="Presentation"
          description="Manage how the form and responses are presented"
          isOpen={sections.presentation}
          onClick={() => toggleSection('presentation')}
        >
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">Show progress bar</div>
              <Toggle checked={settings.showProgressBar} onChange={() => updateSetting('showProgressBar')} />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">Shuffle question order</div>
              <Toggle checked={settings.shuffleOrder} onChange={() => updateSetting('shuffleOrder')} />
            </div>
          </div>
        </SettingSection>

        <SettingSection
          title="Defaults"
          description="Form defaults, Question defaults"
          onClick={() => { }}
        />
      </div>
    </div>
  )
}

export default FormSettings
