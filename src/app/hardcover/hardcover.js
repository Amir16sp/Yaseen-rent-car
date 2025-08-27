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
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">Health & Safety</h2>

      <div className="space-y-6 p-4">
        <p>
       When applying FLEXCOAT, prioritizing safety is crucial. It is essential to wear appropriate protective clothing, gloves, and eye protection.
This gear helps minimize the risk of skin contact with the material and protects your eyes from potential splashes during application.
Direct contact with the eyes should be avoided at all costs. If contact occurs, rinse the affected eye immediately with plenty of water and
seek medical attention to ensure proper care. This step is vital for preventing any long-term damage or irritation.
FLEXCOAT is classified as a non-flammable material, making it safe to use in various environments, including those where flammable
substances might pose a risk. Once cured, FLEXCOAT becomes inert and harmless, which means it poses no significant health risks to
individuals in the vicinity.
By adhering to these safety precautions, you can ensure a safe and effective application process while maintaining a healthy working
environment. Taking the time to implement these measures not only protects you but also contributes to a more efficient and successful
project outcome.
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
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-center">صحت اور حفاظت

</h2>

      <div className="space-y-6 text-right p-4" style={{ direction: 'rtl' }}>
        <p>
      فلیکس کوٹ لاگو کرتے وقت ، حفاظت کو ترجیح دینا بہت ضروری ہے۔ مناسب حفاظتی لباس ، دستانے ، اور آنکھوں کی حفاظت کرنا ضروری ہے۔ یہ گیئر مواد کے ساتھ جلد کے رابطے کے خطرے کو کم کرنے میں مدد کرتا ہے اور درخواست کے دوران آپ کی آنکھوں کو ممکنہ چھینٹے سے بچاتا ہے۔

آنکھوں کے ساتھ براہ راست رابطے سے ہر قیمت پر گریز کرنا چاہیے۔ اگر رابطہ ہوتا ہے تو ، متاثرہ آنکھ کو فوری طور پر کافی مقدار میں پانی سے دھوئیں اور مناسب دیکھ بھال کو یقینی بنانے کے لیے طبی امداد حاصل کریں۔ یہ قدم کسی بھی طویل مدتی نقصان یا جلن کو روکنے کے لیے اہم ہے۔

فلیکس کوٹ کو ایک غیر آتش گیر مواد کے طور پر درجہ بندی کیا گیا ہے، جو اسے مختلف ماحول میں استعمال کرنا محفوظ بناتا ہے، بشمول وہ جگہ جہاں آتش گیر مادے خطرے کا باعث بن سکتے ہیں۔ ایک بار ٹھیک ہونے کے بعد فلیکس کوٹ غیر فعال اور بے ضرر ہو جاتا ہے، جس کا مطلب ہے کہ اس سے آس پاس کے لوگوں کے لیے صحت کے لیے کوئی خاص خطرہ نہیں ہے۔

ان حفاظتی احتیاطی تدابیر پر عمل کرتے ہوئے ، آپ صحت مند کام کرنے والے ماحول کو برقرار رکھتے ہوئے ایک محفوظ اور موثر درخواست کے عمل کو یقینی بنا سکتے ہیں ۔ ان اقدامات کو لاگو کرنے کے لیے وقت نکالنا نہ صرف آپ کی حفاظت کرتا ہے بلکہ پروجیکٹ کے زیادہ موثر اور کامیاب نتائج میں بھی حصہ ڈالتا ہے۔
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
