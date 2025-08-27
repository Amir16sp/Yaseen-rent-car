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
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">PRIMER COAT</h2>

      <div className="space-y-6 p-4">
        <p>
          To ensure optimal adhesion and performance of <strong>FLEXCOAT</strong>, the primer coat is a critical step in the application process. Begin by preparing the primer by diluting <strong>1 kg</strong> of FLEXCOAT primer with <strong>2 liters</strong> of clean water. This dilution is essential as it helps the primer penetrate the concrete surface more effectively, enhancing its bonding capabilities.
        </p>

        <p>
          Once the primer is mixed, apply it evenly using a <strong>sprayer, brush, or roller</strong>. Each method has its advantages: a sprayer can provide a smooth and uniform application, while a brush or roller allows for more controlled application, particularly in corners of intricate areas. Whichever method you choose, ensure that the primer is spread evenly across the surface to avoid any inconsistencies.
        </p>

        <p>
          After applying the primer, it is crucial to allow it to dry thoroughly. The drying time is approximately <strong>3 hours</strong>, but this can vary based on environmental conditions such as temperature and humidity. Ensure that the surface is completely dry before proceeding with the application of the FLEXCOAT coating.
        </p>

        <p>
          Properly drying the primer coat is essential for achieving the best adhesion and performance of the subsequent layers, ultimately contributing to the durability and longevity of the finished surface. Following these guidelines will ensure that your application of FLEXCOAT is successful and effective.
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
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">پرائمر کوٹ</h2>

      <div className="space-y-6 text-right p-4" style={{ direction: 'rtl' }}>
        <p>
          فلیکس کوٹ کی بہترین چپکنے اور کارکردگی کو یقینی بنانے کے لیے پرائمر کوٹ کا عمل نہایت اہم ہے۔ پرائمر تیار کرنے کے لیے 1 کلوگرام فلیکس کوٹ پرائمر کو 2 لیٹر صاف پانی میں ملا کر اچھی طرح مکس کریں۔ یہ عمل اس لیے ضروری ہے تاکہ پرائمر کنکریٹ کی سطح میں گہرائی تک جذب ہو سکے اور چپکنے کی صلاحیت میں بہتری آئے۔
        </p>

        <p>
          جب پرائمر تیار ہو جائے تو اسے یکساں طور پر اسپریئر، برش یا رولر کی مدد سے لگائیں۔ ہر طریقہ کے اپنے فائدے ہیں: اسپریئر ہموار اور یکساں تہہ فراہم کرتا ہے، جب کہ برش یا رولر زیادہ کنٹرول کے ساتھ پیچیدہ جگہوں پر مؤثر ہوتا ہے۔ جو بھی طریقہ استعمال کریں، اس بات کو یقینی بنائیں کہ پرائمر سطح پر ہر جگہ یکساں لگایا گیا ہو تاکہ کسی بھی تضاد سے بچا جا سکے۔
        </p>

        <p>
          پرائمر لگانے کے بعد اسے مکمل طور پر خشک ہونے دینا بے حد ضروری ہے۔ عام طور پر خشک ہونے کا وقت تقریباً 3 گھنٹے ہوتا ہے، لیکن درجہ حرارت اور نمی جیسے ماحولیاتی عوامل کی بنیاد پر یہ وقت مختلف ہو سکتا ہے۔
        </p>

        <p>
          فلیکس کوٹ کی کوٹنگ لگانے سے پہلے اس بات کی تصدیق کر لیں کہ سطح مکمل طور پر خشک ہے۔ پرائمر کی مناسب طریقے سے خشکی بعد کی تہوں کی بہتر چپکنے اور لمبی عمر کو یقینی بناتی ہے۔ ان رہنما اصولوں پر عمل کر کے آپ فلیکس کوٹ کی مؤثر اور کامیاب درخواست کو یقینی بنا سکتے ہیں۔
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
