import React from 'react'

export default function input({label, name, type, placeholder, required, textSize, weight}: {label?: string, name: string, type: string, placeholder: string, required: boolean, textSize?: string, weight?: string}) {
  return (
    <div className="form-group flex items-center gap-2">
      {label && <label htmlFor={name} className={`text-${textSize || "sm"} text-nowrap ${weight || "font-normal"}`}>{label}</label>}
      <input type={type} id={name} name={name} placeholder={placeholder} className={`w-full min-w-16 p-2 text-${textSize || "sm"} rounded-md border border-gray-300 ${weight || "font-normal"}`} required={required} 
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (type === 'number') {
          e.target.value = value.replace(/[^0-9]/g, '');
        }
        else if (name === 'contact_number') {
          e.target.value = value.replace(/[^0-9\/-\s]/g, '');
        }
      }}
      />
    </div>
  )
}
