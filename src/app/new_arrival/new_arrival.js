"use client";
import Container from "../Container";
import DynamicCard from "../Dynamic/DynamicCard";
import { FaArrowRight } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { motion } from "framer-motion";

const NewArrival = () => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white">
      <Container>
        <section className="py-10 text-center">
          {/* Motion Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pb-10"
          >
            <h3 className="text-5xl font-semibold mb-8">Description</h3>
          </motion.div>

          {/* FLEXCOAT English Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-left text-lg leading-relaxed text-white bg-black/70 p-6 rounded-md shadow-md"
          >
            <p className="mb-4">
              <strong>FLEXCOAT</strong> is a highly versatile coating solution designed to waterproof, protect, and enhance various concrete surfaces across a wide range of applications. It is ideal for coating concrete roofs, terraces, walls, and balconies, providing a protective barrier against weathering.
            </p>
            <p className="mb-4">
              FLEXCOAT excels on complex structures like domes and arches, conforming seamlessly to intricate geometries while being applicable to diverse materials such as timber, asbestos, zinc sheets, and tiles. It has been designed overall in such a way that it is the best alternative to weather shield and a modern take on polymer paint.
            </p>
            <p className="mb-4">
              It effectively safeguards concrete from carbonation and chloride ingress, making it suitable for multi-story car parks, underpasses, bridges, and commercial buildings.
            </p>
            <p className="mb-4">
              Additionally, FLEXCOAT is perfect for pool decks, outdoor parking lots, industrial facilities, public infrastructure like sidewalks and bike paths, roof gardens, sound barriers, marine structures, and wastewater treatment facilities.
            </p>
            <p>
              It also serves well in historic building restoration, offering modern protection without compromising aesthetic integrity. Overall, FLEXCOAT combines flexibility, durability, and visual appeal, ensuring enhanced performance and longevity for concrete surfaces in various environments.
            </p>
          </motion.div>

          {/* Urdu Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-16 pb-4"
          >
            <h3 className="text-5xl font-semibold mb-8">تفصیل</h3>
          </motion.div>

          {/* Urdu Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            dir="rtl"
            className="max-w-5xl mx-auto text-left text-lg leading-relaxed text-white bg-black/70 p-6 rounded-md shadow-md"
          >
            <p className="mb-4">
              فلیکس کوٹ ایک انتہائی ورسٹائل کولنگ سلوشن ہے جو اپلی کیشنز کی ایک وسیع رینج میں مختلف کنکریٹ کی سطحوں کو واٹر پروف تحفظ اور بڑھانے کے لیے ڈیزائن کیا گیا ہے۔ یہ کنکریٹ کی چھتوں، چھتوں، دیواروں اور بالکونیوں پر کوٹنگ کرنے کے لیے مثالی ہے، جو کہ گنبدوں اور محرابوں جیسے پیچیدہ ڈھانچے پر فلیکس کوٹ کی برتری کے خلاف حفاظتی رکاوٹ فراہم کرتا ہے، جو کہ متنوع مواد جیسے کہ لکڑی، ایسپیسٹوس، زنک کی چادروں پر لاگو ہوتے ہوئے پیچیدہ جیومیٹری کے مطابق ہوتا ہے۔
            </p>
            <p className="mb-4">
              اسے مجموعی طور پر اس طرح ڈیزائن کیا گیا ہے کہ یہ ویدر شیلڈ کا بہترین متبادل اور پولیمر پینٹ پر جدید طریقہ ہے۔ یہ کاربونیشن اور کلورائیڈ کے داخلے سے کنکریٹ کی مؤثر حفاظت کرتا ہے، جس سے یہ کثیر منزلہ کار پارک، انڈر پاسز، پلوں اور تجارتی عمارتوں کے لیے موزوں ہے۔
            </p>
            <p className="mb-4">
              مزید برآں، فلیکس کوٹ پول ڈیک، آؤٹ ڈور پارکنگ لاٹس، صنعتی سہولیات، عوامی انفراسٹرکچر جیسے فٹ پاتھ اور موٹر سائیکل کے راستے، چھت کے باغات، ساؤنڈ بیریئرز، سمندری ڈھانچے، اور گندے پانی کی صفائی کی سہولیات کے لیے بہترین ہے۔
            </p>
            <p>
              یہ تاریخی عمارت کی بحالی میں بھی اچھی طرح سے کام کرتا ہے، جمالیاتی سالمیت پر سمجھوتہ کیے بغیر جدید تحفظ کی پیشکش کرتا ہے۔ مجموعی طور پر، فلیکس کوٹ لچک، استحکام، اور بصری اپیل کو یکجا کرتا ہے، مختلف ماحول میں کنکریٹ کی سطحوں کے لیے بہتر کارکردگی اور لمبی عمر کو یقینی بناتا ہے۔
            </p>
          </motion.div>

          {/* View All Products Button */}
          <Link href="/bookshop">
            <motion.button
              whileHover={{ x: [0, -5, 5, -5, 5, 0] }}
              transition={{ duration: 0.6 }}
              className="mt-10 bg-[#a84618] text-white py-2 px-6 rounded-full cursor-pointer hover:bg-[#852b02]"
            >
              <div className="flex items-center gap-1">
                View All Products
                <FaArrowRight />
              </div>
            </motion.button>
          </Link>
        </section>
      </Container>
    </div>
  );
};

export default NewArrival;
