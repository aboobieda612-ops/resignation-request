'use client'

import Image from "next/image";
import Input from "./components/Form/input";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center p-6">
      <div className="border p-0.5">
        <div className="border p-0.5">
          <form action="" className="w-full max-w-2xl px-8 py-4 border">
            <div className="header-page">
              <div className="header-page-content grid grid-cols-3 gap-4 justify-items-center items-center text-xl font-bold text-center pb-6 border-b-2 mb-4">
                <div className=" flex flex-col gap-2">
                  <h1 className=" mb-4 text-base">
                    الجمهورية العربية السورية
                    <br />
                    وزارة الدفاع
                    <br />
                  </h1>
                  <Input label="الجهة" name="name" type="text" placeholder="الجهة" required textSize="sm" />
                </div>
                <div className="logo max-w-32 flex items-center justify-center flex-1">
                  <img src="/logo.png" alt="logo" className="w-full h-full object-contain" />
                </div>
                <h1 className="text-base font-normal text-center flex flex-col gap-1 justify-self-end">
                  <span>
                    Syrian Arab Republic
                  </span>
                  <span>
                    Ministry of Defense
                  </span>
                </h1>
              </div>
            </div>
            <div className="header-request flex flex-col gap-1 items-center text-center font-bold text-lg mb-2">
              <h1>
                (طلب استقالة)
              </h1>
              <h2>
                السيد مدير إدارة القوى البشرية تحية طيبة وبعد....
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <div className="form-part flex flex-col gap-3">
                <h3 className="font-bold text-base">
                  - نرفع لكم طلب االستقالة التالي:
                </h3>
                <div className="request-content grid grid-cols-3 gap-4">
                  <Input label="الاسم الثلاثي" name="name" type="text" placeholder="الاسم الثلاثي" required />
                  <Input label="اسم الأم" name="mother_name" type="text" placeholder="اسم الأم" required />
                  <Input label="الرقم العسكري" name="military_number" type="text" placeholder="الرقم العسكري" required />
                </div>
              </div>
              <div className="form-part flex flex-col gap-3 mb-2">
                <h3 className="font-bold text-base">
                  - العامل لدينا في:
                </h3>
                <div className="request-content grid grid-cols-2 gap-4">
                  <Input label="السوية التنظيمية الأولى:" name="name" type="text" placeholder="الاسم الثلاثي" required />
                  <Input label="السوية التنظيمية الثانية" name="organizational_unit_2" type="text" placeholder="السوية التنظيمية الثانية" required />
                  <Input label="السوية التنظيمية الثالثة" name="organizational_unit_3" type="text" placeholder="السوية التنظيمية الثالثة" required />
                  <Input label="السوية التنظيمية الرابعة" name="organizational_unit_4" type="text" placeholder="السوية التنظيمية الرابعة" required />
                </div>
                <div className="request-content grid grid-cols-3 gap-4">
                  <Input label="نمط العمل:" name="work_type" type="text" placeholder="نمط العمل" required />
                  <Input label="التخصص:" name="specialty" type="text" placeholder="التخصص" required />
                  <Input label="مسمى العامل:" name="employee_name" type="text" placeholder="مسمى العامل" required />
                </div>
              </div>
              <div className="form-part flex flex-col gap-3">
                <div className="request-content grid grid-cols-3 gap-4">
                  <Input label="الحالة الاجتماعية:" name="name" type="text" placeholder="الحالة الاجتماعية" required />
                  <Input label="التولد:" name="birth_date" type="date" placeholder="التولد" required />
                  <Input label="رقم التواصل:" name="contact_number" type="text" placeholder="رقم التواصل" required />
                </div>
              </div>
              <div className="form-part flex flex-col gap-3">
                <div className="request-content grid grid-cols-2 gap-4">
                  <Input label="تاريخ الأنتساب:" name="date_of_admission" type="date" placeholder="تاريخ الأنتساب"  required />
                  <Input label="تاريخ التوقف عن العمل:" name="date_of_stop_working" type="date" placeholder="تاريخ التوقف عن العمل" required />
                </div>
              </div>
              <div className="border border-dashed p-2 flex text-xs">
                <div className="inline">
                  أنا الموقع أدناه :
                  <input type="text" name="signature" placeholder="الموقع" required className="mx-1 min-w-16 p-1 my-2 text-xs rounded-md border border-gray-300 inline"/>
                  أرجو الموافقة على طلب استقالتي من وزارة الدفاع 
                  وذلك بسبب :
                  <input type="text" name="reason" placeholder="السبب" required className="mx-1 min-w-32 p-1 text-xs my-2 rounded-md border inline border-gray-300"/>
                  <br />
                  وأتعهد بعدم تسريب أي معلومة خاصة بالعمل
                </div>
                <div className="flex flex-col gap-1 border border-dashed p-2 flex-1  min-w-28 text-xs">
                  <h4>
                    توقيع مقدم الطلب
                  </h4>
                </div>
              </div>
              <div className="border border-dashed p-2 flex text-xs flex-col gap-2">
                <Input label="رأي المسؤول المباشر(من حيث نوعية مقدم الطلب ومدى التزامه):" name="direct_supervisor_opinion" type="text" placeholder="رأي المسؤول المباشر(من حيث نوعية مقدم الطلب ومدى التزامه)" required weight="font-bold" />
                <Input label="أي مسؤول السوية التنظيمية الثانية:" name="second_supervisor_opinion" type="text" placeholder="أي مسؤول السوية التنظيمية الثانية" required weight="font-bold" />
              </div>
              <div className="flex gap-4 text-center h-28">
                <div className="flex flex-col gap-1 border border-dashed p-2 flex-1  min-w-28 text-xs font-bold">
                  <h4>
                    رئيس فرع القوى البشرية
                  </h4>
                </div>
                <div className="flex flex-col gap-1 border border-dashed p-2 flex-1  min-w-28 text-xs font-bold">
                  <h4>
                    قائد السوية الأولى
                  </h4>
                </div>
                <div className="flex flex-col gap-1 border border-dashed p-2 flex-1  min-w-28 text-xs font-bold">
                  <h4>
                    رأي إدارة القوى البشرية\
                    <br />
                     الفرع المختص:
                  </h4>
                </div>
              </div>
              <div className="flex justify-center items-center text-center font-bold gap-1 flex-wrap">
                <span>حرر في</span>
                <input type="text" name="hijri_day" inputMode="numeric" maxLength={2} placeholder="--" required className="w-10 p-1 text-center text-sm rounded-md border border-gray-300" />
                <span>\</span>
                <input type="text" name="hijri_month" inputMode="numeric" maxLength={2} placeholder="--" required className="w-10 p-1 text-center text-sm rounded-md border border-gray-300" />
                <span>\144ه</span>
                <span>الموافق ل</span>
                <input type="text" name="gregorian_day" inputMode="numeric" maxLength={2} placeholder="--" required className="w-10 p-1 text-center text-sm rounded-md border border-gray-300" />
                <span>\</span>
                <input type="text" name="gregorian_month" inputMode="numeric" maxLength={2} placeholder="--" required className="w-10 p-1 text-center text-sm rounded-md border border-gray-300" />
                <span>\2026م</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
