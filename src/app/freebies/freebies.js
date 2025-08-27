import React from 'react'
import { motion } from "framer-motion";
const benifit = () => {
  return (
    <>
      <div className="max-h-full w-full bg-cover bg-center bg-no-repeat bg-white">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* FLEXCOAT Content Section */}
          <div className="px-8 lg:px-32 py-20 text-white">
            <div className="bg-black/70 rounded-md text-md leading-relaxed p-6">
             <h2 className="text-3xl font-bold text-[#9cabec] text-center mb-6"> Application </h2>

              <div className="space-y-6 p-4 text-white">
                <div>
                  <strong className="font-bold text-2xl">Initial Preparation:</strong>
                  <p>
                    The first coat of FLEXCOAT should be applied to a dry, primed surface to ensure optimal adhesion. It is crucial to allow the first coat to fully dry before applying the second coat. This typically takes about 2 to 3 hours, depending on weather conditions.
                  </p>
                </div>
                <div>
                  <strong className="font-bold text-2xl">Climate Considerations:</strong>
                  <p>
                    In hot, dry climates, dampening brushes can aid in the application process, helping to maintain moisture and facilitate an even application.
                  </p>
                </div>
                <div>
                  <strong className="font-bold text-2xl">Poor Condition or Movement-Prone Roofs:</strong>
                  <p>
                    For roofs in poor condition or where significant movement is expected, it is recommended to use a sandwich system that incorporates reinforcing fabric. This additional support enhances the durability and flexibility of the membrane.
                  </p>
                </div>
                <div>
                  <strong className="font-bold text-2xl">Membrane Installation:</strong>
                  <p>
                    When applying the reinforcing membrane, imbed it into the wet first coat using a roller or stiff brush. Take care to avoid the formation of bubbles or wrinkles. Ensure that membrane overlaps are a minimum of 100 mm on end laps and 75 mm on side laps to maintain integrity.
                  </p>
                </div>
                <div>
                  <strong className="font-bold text-2xl">Second Coat Application:</strong>
                  <p>
                    Once the first coat has dried sufficiently to support light foot traffic, apply a second coat of FLEXCOAT at a coverage rate of 0.5 kg/m². This ensures that the membrane is completely saturated, providing maximum protection.
                  </p>
                </div>
                <div>
                  <strong className="font-bold text-2xl">Finishing Touches:</strong>
                  <p>
                    After the second coat has dried, apply a finishing coat of FLEXCOAT at right angles to the second coat, also at a rate of 0.5 kg/m². This final layer enhances the overall performance and appearance of the coating.
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
      <h2 className="text-3xl font-bold text-[#9cabec] mb-6  text-center">درخواست</h2>

      <div className="space-y-6 text-right p-8" style={{ direction: 'rtl' }}>
        <div>
          <strong className="font-bold text-2xl">ابتدائی تیاری:</strong>
          <p>
            فلیکس کوٹ کا پہلا کوٹ خشک، پرائمڈ سطح پر لگایا جانا چاہیے تا کہ زیادہ سے زیادہ چپکنے کو یقینی بنایا جا سکے۔ دوسرا کوٹ لگانے سے پہلے پہلی کوٹ کو مکمل طور پر خشک ہونے دینا بہت ضروری ہے۔ اس میں عام طور پر تقریباً 2 سے 3 گھنٹے لگتے ہیں، موسمی حالات پر منحصر ہے۔
          </p>
        </div>

        <div>
          <strong className="font-bold text-2xl">آب و ہوا کے تحفظات:</strong>
          <p>
            گرم، خشک آب و ہوا میں نم کرنے والے برش درخواست کے عمل میں مدد کر سکتے ہیں، نمی کو برقرار رکھنے اور یکساں درخواست کو آسان بنانے میں مدد کرتے ہیں۔
          </p>
        </div>

        <div>
          <strong className="font-bold text-2xl">خراب حالت یا نقل و حرکت کا شکار چھتیں:</strong>
          <p>
            خراب حالت میں یا جہاں نمایاں نقل و حرکت متوقع ہو، چھتوں کے لیے یہ سفارش کی جاتی ہے کہ ایک ایسا سینڈوچ سسٹم استعمال کیا جائے جس میں مضبوط کپڑا شامل ہو۔ یہ اضافی مدد جھلی کی استحکام اور لچک کو بڑھاتی ہے۔
          </p>
        </div>

        <div>
          <strong className="font-bold text-2xl">جھلی کی تنصیب:</strong>
          <p>
            مضبوط کرنے والی جھلی کو لگاتے وقت، اسے رولر یا سخت برش کا استعمال کرتے ہوئے گیلے پہلے کوٹ میں لگائیں۔ بلبلوں یا جھریوں کی تشکیل سے بچنے کا خیال رکھیں۔ اس بات کو یقینی بنائیں کہ سالمیت کو برقرار رکھنے کے لیے جھلی کے اوور لیپ اینڈ لپس پر کم از کم 100 ملی میٹر اور سائیڈ لپس پر 75 ملی میٹر ہوں۔
          </p>
        </div>

        <div>
          <strong className="font-bold text-2xl">دوسری کوٹ کی درخواست:</strong>
          <p>
            ایک بار جب پہلا کوٹ کافی خشک ہو جائے تا کہ ہلکے پیروں کی آمد و رفت کو سہارا دے سکے، فلیکس کوٹ کا دوسرا کوٹ m²/kg 0.5 کی کوریج ریٹ پر لگائیں۔ یہ یقینی بناتا ہے کہ جھلی مکمل طور پر سیر ہو، زیادہ سے زیادہ تحفظ فراہم کرتی ہے۔
          </p>
        </div>

        <div>
          <strong className="font-bold text-2xl">فنشنگ ٹچز:</strong>
          <p>
            دوسرا کوٹ خشک ہونے کے بعد، فلیکس کوٹ کا ایک فنشنگ کوٹ دوسرے کوٹ پر دائیں زاویوں پر لگائیں، یہ بھی m²/kg 0.5 کی شرح پر۔ یہ آخری تہہ کوٹنگ کی مجموعی کارکردگی اور ظاہری شکل کو بڑھاتی ہے۔
          </p>
        </div>
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


export default benifit;

