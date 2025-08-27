import React from 'react'
import { motion } from "framer-motion";
const Story = () => {
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
          <div className=" px-6 lg:px-32 py-20 text-white">
            <div className=" bg-black/70  rounded-md text-md  leading-relaxed">

              <h2 className="text-3xl font-bold text-[#9cabec]  pl-4">Uses</h2>
              <ol className="list-decimal list-inside space-y-4 p-8">

                <li>
                  <strong className="font-bold text-2xl">Concrete Roofs and Terraces:</strong> FLEXCOAT is ideal for concrete roof slabs, providing a protective waterproof layer
                  that guards against weathering and enhances durability. It can be applied to terraces and balconies, ensuring these outdoor
                  spaces remain safe and visually appealing.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Complex Structures:</strong> This product is particularly well-suited for structures with complicated geometries, such as domes,
                  arches, shells, folded plates, parabolas, and corrugated sheets. Its flexibility allows it to conform to diverse shapes,
                  ensuring comprehensive coverage and protection. Additionally, FLEXCOAT can be applied to various materials, including timber,
                  asbestos or fiber cement, zinc sheets, asphalt, built-up felt, and tiles, making it a highly adaptable solution.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Protection against Carbonation and Chloride Ingress:</strong> FLEXCOAT is effective in protecting concrete structures from
                  carbonation and chloride ingress, which can lead to deterioration over time. It is particularly useful in environments like
                  multi-storey car parks, underpasses, and bridges. It can also be used on soffits, wing walls, and for concrete repairs in
                  commercial and industrial buildings.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Swimming Pools:</strong> Ideal for coating pool decks and surfaces, FLEXCOAT provides a waterproof barrier that resists chlorine
                  and UV damage, ensuring a safe and attractive environment.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Outdoor Parking Lots:</strong> FLEXCOAT can be used as a surface coating for outdoor parking areas, enhancing durability against
                  vehicle traffic and environmental exposure.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Factories and Warehouses:</strong> It is suitable for protecting floors and walls where chemical resistance and durability are
                  critical.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Pedestrian Zones:</strong> FLEXCOAT can be applied to sidewalks, pedestrian walkways, and bike paths, providing a slip-resistant
                  surface while extending lifespan.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Green Roofs:</strong> Perfect for use in green roof applications, FLEXCOAT protects the underlying concrete while allowing for
                  vegetation integration.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Sound Barriers:</strong> It can be used on sound barrier walls along highways or railways, offering weather protection and
                  aesthetic appeal.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Marine Use:</strong> FLEXCOAT is effective in marine environments like docks and piers, where it resists saltwater exposure.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Chemical-Prone Areas:</strong> Its resistance to chemicals and moisture makes it ideal for spaces where chemical or water
                  exposure is high.
                </li>
                <li>
                  <strong className="font-bold text-2xl">Historic Structures:</strong> FLEXCOAT can protect and restore historic concrete buildings, offering modern protection without
                  compromising visual integrity.
                </li>
              </ol>
            </div>
          </div>


        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="  lg:px-32 text-white">
            <div className=" px-8 lg:px-32 py-20 text-white">
              <div className=" bg-black/70 rounded-md text-lg leading-relaxed p-6">
                <h2 className="text-3xl font-bold text-[#9cabec] mb-6 text-right"> استعمالات</h2>

                <ol className="list-decimal list-inside space-y-4  text-right  p-8" style={{ direction: 'rtl' }}>
                  <li>
                    <strong className="font-bold text-2xl">کنکریٹ کی چھتیں اور ٹیرس:</strong> فلیکس کوٹ کنکریٹ کی چھتوں کے سلیب کے لیے مثالی ہے، جو ایک حفاظتی واٹر پروف تہہ فراہم کرتا ہے جو موسمی اثرات سے بچاتا ہے اور پائیداری میں اضافہ کرتا ہے۔ یہ چھتوں اور بالکونیوں پر بھی لاگو کیا جا سکتا ہے تاکہ یہ جگہیں محفوظ اور دلکش رہیں۔
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">پیچیدہ ڈھانچے:</strong> یہ پروڈکٹ خاص طور پر گنبد، محراب، خول، فولڈ پلیٹس، پیرا بولاز اور نالیدار چادروں جیسے پیچیدہ ساختوں کے لیے موزوں ہے...
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">کاربونیشن اور کلورائیڈ انگریس سے تحفظ:</strong> فلیکس کوٹ کنکریٹ کو کاربونیشن اور کلورائیڈ جیسے نقصان دہ اجزاء سے بچاتا ہے...
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">سوئمنگ پولز:</strong> پول ڈیکس اور سطحوں کے لیے واٹر پروف تہہ فراہم کرتا ہے...
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">پارکنگ ایریاز:</strong> بیرونی پارکنگ کی سطح پر اپلائی کرنے سے گاڑیوں کی آمدورفت اور موسم کے اثرات سے تحفظ ملتا ہے۔
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">فیکٹریاں اور گودام:</strong> وہ جگہیں جہاں کیمیکل ریزسٹنس اور پائیداری کی ضرورت ہو...
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">پیدل راستے:</strong> فٹ پاتھ، سائیکل ٹریک اور واک وے پر یہ پرچی سے محفوظ سطح فراہم کرتا ہے۔
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">گرین روف:</strong> فلیکس کوٹ کنکریٹ کو محفوظ رکھتے ہوئے سبز پودوں کی نشوونما کے لیے ماحول سازگار بناتا ہے۔
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">ساؤنڈ بیریئرز:</strong> ہائی وے یا ریلوے کے ساتھ دیواروں پر بھی استعمال کیا جا سکتا ہے تاکہ آواز کم ہو...
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">سمندری ماحول:</strong> ڈاک، گھاٹ اور سمندر کے قریب کے ڈھانچوں کو کھارے پانی سے تحفظ دیتا ہے۔
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">کیمیائی ماحول:</strong> جہاں پانی اور کیمیکلز کی نمائش زیادہ ہو، وہاں فلیکس کوٹ موزوں حل ہے۔
                  </li>
                  <li>
                    <strong className="font-bold text-2xl">تاریخی عمارات:</strong> پرانی کنکریٹ عمارتوں کو بغیر جمالیاتی نقصان کے محفوظ اور بحال کرتا ہے۔
                  </li>
                </ol>
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
