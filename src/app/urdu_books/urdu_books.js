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
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">Precaution</h2>

      <div className="space-y-6 p-4">
        <p>
        FLEXCOAT should not be applied when temperatures drop below 5°C and are expected to continue falling. Low
temperatures can adversely affect the curing process, leading to compromised adhesion and overall performance of the
product. Applying FLEXCOAT in cold conditions may result in a weak bond or incomplete setting, which could ultimately
undermine the durability of the coating.
Additionally, it is important to refrain from proceeding with the application if rainfall is imminent. Moisture can interfere
with the curing process, preventing the product from adhering properly to the surface and potentially causing defects. If
application must occur, it should only be done in a sheltered or protected location to shield the product from direct exposure
to rain. Furthermore, FLEXCOAT should not be exposed to moving water during the application process. Contact with water can disrupt
the setting and curing phases, leading to uneven finishes or loss of effectiveness. Ensuring that the application area is dry and stable is
crucial for achieving the best results. Following these guidelines will help ensure that FLEXCOAT performs optimally and lasts as intended.
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
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">احتیاط
</h2>

      <div className="space-y-6 text-right p-4" style={{ direction: 'rtl' }}>
        <p>
        جب درجہ حرارت 5°C سے نیچے گر جائے اور اس کے گرتے رہنے کی توقع کی جائے تو فلیکس کوٹ نہیں لگانا چاہیے۔ کم درجہ حرارت کیورنگ کے عمل کو بری طرح متاثر کر سکتا ہے، جس کی وجہ سے پروڈکٹ کی چپکنے والی اور مجموعی کار کردگی متاثر ہوتی ہے۔ ٹھنڈے حالات میں فلیکس کوٹ لگانے کے نتیجے میں کمزور بانڈ یا نامکمل ترتیب ہو سکتی ہے، جو بالآخر کوٹنگ کی پائیداری کو نقصان پہنچا سکتی ہے۔

مزید برآں، اگر بارش آسن ہے تو درخواست کے ساتھ آگے بڑھنے سے گریز کرنا ضروری ہے۔ نیمی کیورنگ کے عمل میں مداخلت کر سکتی ہے، مصنوعات کو سطح پر صحیح طریقے سے لگنے سے روکتی ہے اور ممکنہ طور پر نقائص پیدا کر سکتی ہے۔ اگر اطلاق ہونا ضروری ہے تو ، یہ صرف ایک پناہ گاہ یا محفوظ جگہ پر کیا جانا چاہئے تا کہ مصنوعات کو بارش کے براہ راست نمائش سے بچایا جا سکے۔

مزید برآں، درخواست کے عمل کے دوران فلیکس کوٹ کو حرکت پذیر پانی کے سامنے نہیں آنا چاہیے۔ پانی کے ساتھ رابطہ ترتیب اور علاج کے مراحل میں خلل ڈال سکتا ہے، جس کے نتیجے میں ناہموار تکمیل یا تاثیر ختم ہو جاتی ہے۔ اس بات کو یقینی بنانا کہ درخواست کا علاقہ خشک اور مستحکم ہے بہترین نتائج حاصل کرنے کے لیے بہت ضروری ہے۔ ان رہنما خطوط پر عمل کرنے سے اس بات کو یقینی بنانے میں مدد ملے گی کہ فلیکس کوٹ بہترین کارکردگی کا مظاہرہ کرے اور حسب منشا جاری رہے۔
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
