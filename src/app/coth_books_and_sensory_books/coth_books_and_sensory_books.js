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
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">Cleaning Of Tools</h2>

      <div className="space-y-6 p-4">
        <p>
          After applying FLEXCOAT, it is essential to clean all tools and application equipment thoroughly with water immediately to
prevent any residue from hardening on the surfaces. Proper cleaning ensures that your tools remain in good condition for
future use and prevents the buildup of cured material, which can be challenging to remove later. If the material hardens or
cures on your tools, it will require mechanical removal, which can damage the tools and make them less effective. To maintain
the quality and longevity of your equipment, take the time to rinse brushes, rollers, and any other application tools right
after use. This proactive approach not only saves time and effort down the line but also ensures a clean working environment,
facilitating a smoother application process for any subsequent projects. Always remember that quick and efficient cleaning
is a critical step in the overall maintenance of both your tools and the quality of your work.
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
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">اووزار کی صفائی
</h2>

      <div className="space-y-6 text-right p-4" style={{ direction: 'rtl' }}>
        <p>
         

فلیکس کوٹ لگانے کے بعد، یہ ضروری ہے کہ تمام آلات اور استعمال کے آلات کو فوری طور پر پانی سے اچھی طرح صاف کیا جائے تا کہ سطحوں پر کسی بھی باقیات کو سخت ہونے سے روکا جا سکے ۔ مناسب صفائی اس بات کو یقینی بناتی ہے کہ آپ کے اوزار مستقبل کے استعمال کے لیے اچھی حالت میں رہیں اور علاج شدہ مواد کو جمع ہونے سے روکتا ہے، جے بعد میں ہٹانا مشکل ہو سکتا ہے۔ اگر مواد آپ کے ٹولز پرسخت یا ٹھیک ہو جاتا ہے، تو اس مکینیکل ہٹانے کی ضرورت ہوگی ، جوٹولز کو نقصان پہنچا سکتا ہے اور انہیں کم موثر بنا سکتا ہے۔ اپنے آلات کے معیار اور لمبی عمر کو برقرار رکھنے کے لیے، برش ، رولرس ، اور کسی دوسرے ایپلیکیشن ٹولز کو استعمال کے فوراً بعد دھونے کے لیے وقت نکالیں ۔ یہ فعال نقطہ نظر نہ صرف وقت اور کوشش کو لائن کے نیچے بچاتا ہے بلکہ کام کرنے کے صاف ماحول کو بھی یقینی بناتا ہے، جس سے بعد کے کسی بھی پروجیکٹ کے لیے درخواست کے عمل کو آسان بناتا ہے۔ ہمیشہ یاد رکھیں کہ فوری اور موثر صفائی آپ کے ٹولز اور آپ کے کام کے معیار دونوں کی مجموعی دیکھ بھال میں ایک اہم قدم ہے۔
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
