import React from 'react'
import { motion } from "framer-motion";
const Story = () => {
  return (
    <>
      <div className="max-h-full w-full bg-cover bg-center bg-no-repeat bg-[#59c3e1]">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* FLEXCOAT Content Section */}
          <div className="lg:px-32 text-white">
  <div className="px-8 lg:px-32 py-20 text-white">
    <div className="bg-black/70 rounded-md text-lg leading-relaxed p-6">
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">Colour</h2>

      <div className="space-y-6 p-4">
        <p>
          FLEXCOAT is primarily available in a white colour, which offers several benefits, including excellent UV reflectivity and heat
resistance, helping to keep surfaces cooler in warm climates. This makes it an ideal choice for roofs and outdoor applications,
where temperature management is essential.
For those seeking specific aesthetic preferences or design requirements, FLEXCOAT can be produced in a variety of other
colors upon request. This customization allows users to match the coating with existing structures or personal design visions,
ensuring that functionality does not come at the expense of visual appeal. By accommodating colour requests, FLEXCOAT
provides versatility, making it suitable for a broader range of applications while still maintaining its protective qualities. If
you have a specific colour in mind, please reach out to inquire about availability and options.
        </p>

        
      </div>
    </div>
  </div>
</div>



        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
         <div className="lg:px-32 text-white">
  <div className="px-8 lg:px-32 py-20 text-white">
    <div className="bg-black/70 rounded-md text-lg leading-relaxed p-6">
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">رنگ
</h2>

      <div className="space-y-6 text-right p-4" style={{ direction: 'rtl' }}>
        <p>
         فلیکس کوٹ بنیادی طور پر سفید رنگ میں دستیاب ہے، جو کئی فوائد پیش کرتا ہے ، بشمول بہترین UV عکاسی اور گرمی کی مزاحمت ، گرم موسم میں سطحوں کو ٹھنڈا رکھنے میں مدد کرتا ہے۔ یہ چھتوں اور بیرونی ایپلی کیشنز کے لیے ایک مثالی انتخاب بناتا ہے، جہاں درجہ حرارت کا انتظام ضروری ہے۔

مخصوص جمالیاتی ترجیحات یا ڈیزائن کی ضروریات کے متلاشی افراد کے لیے، درخواست پر فلیکس کوٹ کو مختلف رنگوں میں تیار کیا جا سکتا ہے۔ تخصیص صارفین کو موجودہ ڈھانچے یا ذاتی ڈیزائن کے تصورات کے ساتھ کوٹنگ کو ملانے کی اجازت دیتی ہے، اس بات کو یقینی بناتے ہوئے کہ فعالیت بصری اپیل کی قیمت پر نہیں آتی ہے۔ رنگوں کی درخواستوں کو ایڈ جسٹ کرتے ہوئے فلیکس کوٹا رتے ہوئے فلیکس کوٹ استر تا فراہم کرتا ہے، جو اسے اپنی حفاظتی خصوصیات کو برقرار رکھتے ہوئے ایپلی کیشنز کی وسیع رینج کے لیے موزوں بناتا ہے۔ اگر آپ کے ذہن میں کوئی مخصوص رنگ ہے، تو براہ کرم دستیابی اور اختیارات کے بارے میں پوچھ گچھ۔
        </p>

        
      </div>
    </div>
  </div>
</div>



        </motion.div>
      </div>


      {/* Quote Section */}

    </>
  );
};


export default Story;
