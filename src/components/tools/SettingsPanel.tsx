'use client';

import React from 'react';
import { ToolDefinition } from '@/lib/registry/types';
import { Slider } from '@/components/ui/Slider';
import { Toggle } from '@/components/ui/Toggle';
import { Select } from '@/components/ui/Select';
import { Card } from '@/components/ui/Card';

interface SettingsPanelProps {
  tool: ToolDefinition;
  settings: Record<string, any>;
  onSettingChange: (key: string, value: any) => void;
  disabled?: boolean;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  tool,
  settings,
  onSettingChange,
  disabled,
}) => {
  if (tool.settings.length === 0) return null;

  return (
    <Card className="flex flex-col gap-6">
      <h3 className="font-extrabold text-xl font-[family-name:var(--font-heading)] border-b-3 border-black pb-2">
        Processing Settings
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tool.settings.map((setting) => {
          const value = settings[setting.id] !== undefined ? settings[setting.id] : setting.defaultValue;

          switch (setting.type) {
            case 'number':
              if (setting.min !== undefined && setting.max !== undefined) {
                return (
                  <Slider
                    key={setting.id}
                    label={setting.label}
                    value={value}
                    min={setting.min}
                    max={setting.max}
                    onChange={(e) => onSettingChange(setting.id, Number(e.target.value))}
                    disabled={disabled}
                  />
                );
              }
              // Fallback to basic number input if no min/max
              return (
                <div key={setting.id} className="flex flex-col gap-2">
                  <label className="font-bold text-gray-900 uppercase tracking-wide text-sm">{setting.label}</label>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => onSettingChange(setting.id, Number(e.target.value))}
                    disabled={disabled}
                    className="w-full px-4 py-2 border-3 border-black font-bold focus:ring-4 focus:ring-primary outline-none"
                  />
                </div>
              );

            case 'boolean':
              return (
                <div key={setting.id} className="flex items-center h-full">
                  <Toggle
                    label={setting.label}
                    checked={value}
                    onChange={(checked) => onSettingChange(setting.id, checked)}
                    disabled={disabled}
                    className="w-full"
                  />
                </div>
              );

            case 'select':
              return (
                <Select
                  key={setting.id}
                  label={setting.label}
                  options={setting.options || []}
                  value={value}
                  onChange={(val) => onSettingChange(setting.id, val)}
                  disabled={disabled}
                />
              );

            default:
              return null;
          }
        })}
      </div>
    </Card>
  );
};
