"use client";
import Container from "../Container";
import DynamicCard from "../Dynamic/DynamicCard";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
// Images
import Jannah from "../assets/images/rollar.png";
import Khood from "../assets/images/singalbrush.png";
import Jannat from "../assets/images/doublebrush.png";
import Day from "../assets/images/kondi.png";
import Safa from "../assets/images/minirollar.png";
import WallSeelar from "../assets/images/seelar.png"
import WallSeelarone from "../assets/images/seelarfive.png"
import Putty from "../assets/images/wallpatty.png"
import Puttyone from "../assets/images/wallpattyfive.png"
import Emultion from "../assets/images/emultion.png"
import Emultionone from "../assets/images/emultionfive.png"
import Flex from "../assets/images/fixcoat.png"
import Flexone from "../assets/images/fixcoatfive.png"
import SBR from "../assets/images/sbr.png"


const products = [
  {
    id: 1,
    title: "Wall Sealer Primer 20kg",
    price: 13000,
    oldPrice: 14200,
    image: WallSeelar,
    description: `Wall sealer paint is a type of undercoat or primer applied to walls before the final paint. Its main purpose is to seal porous surfaces, improve paint adhesion, and increase the durability of the topcoat.

Key Features of Wall Sealer Paint
Surface Preparation

Seals porous surfaces like plaster, concrete, or drywall.

Creates a smooth and even base for the topcoat.

Improves Adhesion

Helps the topcoat bind better to the wall surface.

Reduces the chance of peeling or flaking paint.

Moisture Resistance

Acts as a barrier against moisture.

Prevents dampness and efflorescence (white salt deposits on the wall).

Stain Blocking

Covers minor stains and prevents them from bleeding through the topcoat.

Ideal for areas prone to marks or discoloration.

Enhances Finish

Provides a uniform base which enhances the appearance of the final paint.

Reduces the number of topcoat layers needed.

Where to Use Wall Sealer Paint
Newly plastered or repaired walls

Interior and exterior concrete surfaces

Chalky or powdery walls

Humid or moisture-prone areas

Types of Wall Sealers
Solvent-Based Sealers

Stronger adhesion and moisture resistance

Suitable for exterior walls

Water-Based Sealers

Low odor and eco-friendly

Ideal for indoor use

Application Tips
Ensure the surface is clean, dry, and free from dust.

Apply one or two coats depending on wall condition.

Allow sufficient drying time before applying the topcoat.`,
  },
  {
    id: 2,
    title: "Wall Sealer Primer 5kg",
    price: 3250,
    oldPrice: 3380,
    image: WallSeelarone,
    description: `Wall sealer paint is a type of undercoat or primer applied to walls before the final paint. Its main purpose is to seal porous surfaces, improve paint adhesion, and increase the durability of the topcoat.

Key Features of Wall Sealer Paint
Surface Preparation

Seals porous surfaces like plaster, concrete, or drywall.

Creates a smooth and even base for the topcoat.

Improves Adhesion

Helps the topcoat bind better to the wall surface.

Reduces the chance of peeling or flaking paint.

Moisture Resistance

Acts as a barrier against moisture.

Prevents dampness and efflorescence (white salt deposits on the wall).

Stain Blocking

Covers minor stains and prevents them from bleeding through the topcoat.

Ideal for areas prone to marks or discoloration.

Enhances Finish

Provides a uniform base which enhances the appearance of the final paint.

Reduces the number of topcoat layers needed.

Where to Use Wall Sealer Paint
Newly plastered or repaired walls

Interior and exterior concrete surfaces

Chalky or powdery walls

Humid or moisture-prone areas

Types of Wall Sealers
Solvent-Based Sealers

Stronger adhesion and moisture resistance

Suitable for exterior walls

Water-Based Sealers

Low odor and eco-friendly

Ideal for indoor use

Application Tips
Ensure the surface is clean, dry, and free from dust.

Apply one or two coats depending on wall condition.

Allow sufficient drying time before applying the topcoat.`,
  },
  {
    id: 3,
    title: "Wall Putty 20Kg",
    price: 3200,
    oldPrice: 3300,
    image: Putty,
    description: `Wall putty is a white cement-based or acrylic-based compound used to smoothen wall surfaces before painting. It fills cracks, covers uneven patches, and creates a smooth, level, and paint-ready surface.

Key Features of Wall Putty
Smooth Surface Finish

Provides an even base for paint

Enhances the final look and lifespan of the paint

Crack & Dent Filling

Covers minor wall cracks, dents, and holes

Improves surface strength and adhesion

Paint Adhesion Booster

Increases bonding between the wall and paint

Prevents paint from flaking or peeling

Water-Resistant

Offers protection against moisture (especially white cement-based putty)

Suitable for both interior and exterior walls

Durability

Makes wall surfaces tougher and longer-lasting

Reduces maintenance costs over time

Types of Wall Putty
White Cement-Based Putty

Strong and durable

Ideal for both internal and external walls

Provides a hard base for all kinds of paints

Acrylic-Based Putty

Ready-to-use, smoother texture

Best for interior use

Good for minor imperfections

Application Areas
New walls (before primer and paint)

Old walls (for surface repair and paint reapplication)

Cement plaster, concrete, and asbestos surfaces

Benefits of Using Wall Putty
Improves paint performance and life

Reduces paint consumption

Easy to apply and sand

Resistant to flaking and dampness

Application Tips
Ensure the wall is clean, dry, and free from dust or grease

Apply in thin layers using a putty knife or trowel

Allow proper drying time before sanding and painting

Use wall primer over putty before applying paint`,
  },
  {
    id: 4,
    title: "Wall Putty 5Kg",
    price: 800,
    oldPrice: 900,
    image: Puttyone,
    description: `Wall putty is a white cement-based or acrylic-based compound used to smoothen wall surfaces before painting. It fills cracks, covers uneven patches, and creates a smooth, level, and paint-ready surface.

Key Features of Wall Putty
Smooth Surface Finish

Provides an even base for paint

Enhances the final look and lifespan of the paint

Crack & Dent Filling

Covers minor wall cracks, dents, and holes

Improves surface strength and adhesion

Paint Adhesion Booster

Increases bonding between the wall and paint

Prevents paint from flaking or peeling

Water-Resistant

Offers protection against moisture (especially white cement-based putty)

Suitable for both interior and exterior walls

Durability

Makes wall surfaces tougher and longer-lasting

Reduces maintenance costs over time

Types of Wall Putty
White Cement-Based Putty

Strong and durable

Ideal for both internal and external walls

Provides a hard base for all kinds of paints

Acrylic-Based Putty

Ready-to-use, smoother texture

Best for interior use

Good for minor imperfections

Application Areas
New walls (before primer and paint)

Old walls (for surface repair and paint reapplication)

Cement plaster, concrete, and asbestos surfaces

Benefits of Using Wall Putty
Improves paint performance and life

Reduces paint consumption

Easy to apply and sand

Resistant to flaking and dampness

Application Tips
Ensure the wall is clean, dry, and free from dust or grease

Apply in thin layers using a putty knife or trowel

Allow proper drying time before sanding and painting

Use wall primer over putty before applying paint`,
  },
  {
    id: 5,
    title: "Emultion Paint 20Kg",
    price: 5500,
    oldPrice: 6000,
    image: Emultion,
    description: `Emulsion paint is a water-based paint commonly used for interior and exterior walls and ceilings. It contains pigments, binders (like acrylic), and additives suspended in water, which evaporates after application, leaving a smooth, durable finish.

Key Features of Emulsion Paint
Water-Based & Low Odor

Easy to apply and quick to dry

Low VOC (Volatile Organic Compounds), making it safer for indoor use

Washable & Durable

Resistant to stains and moisture

Allows easy cleaning with a damp cloth, especially in premium variants

Smooth Finish

Offers a matte, satin, or glossy finish depending on the formulation

Ideal for achieving a modern, clean look

Breathable

Allows water vapor to pass through, preventing dampness buildup on walls

Good Coverage

Provides excellent hiding power, covering previous colors and imperfections effectively

Types of Emulsion Paint
Matte Emulsion

Non-reflective, ideal for concealing surface imperfections

Best for ceilings and low-traffic areas

Silk/Satin Emulsion

Slightly shiny finish, smooth to touch

Good for bedrooms and living rooms

Gloss/Sheen Emulsion

Reflective and durable

Suitable for kitchens, bathrooms, and high-traffic areas

Acrylic Emulsion

Contains acrylic resin for better durability and weather resistance

Suitable for both interiors and exteriors

Application Areas
Interior walls and ceilings

Exterior cemented walls (with weatherproof variants)

Plastered surfaces, drywall, concrete, and brickwork

Benefits of Using Emulsion Paint
Eco-friendly and low odor

Quick-drying with minimal surface preparation

Long-lasting color and finish

Easy to maintain and touch-up

Application Tips
Prepare the surface by cleaning and removing dust or grease

Apply a primer or wall sealer before emulsion for best results

Use a brush, roller, or spray depending on surface and area

Apply 2 coats for optimal color and finish`,
  },
  {
    id: 6,
    title: "Emultion Paint 5Kg",
    price: 1375,
    oldPrice: 1450,
    image: Emultionone,
    description: `Emulsion paint is a water-based paint commonly used for interior and exterior walls and ceilings. It contains pigments, binders (like acrylic), and additives suspended in water, which evaporates after application, leaving a smooth, durable finish.

Key Features of Emulsion Paint
Water-Based & Low Odor

Easy to apply and quick to dry

Low VOC (Volatile Organic Compounds), making it safer for indoor use

Washable & Durable

Resistant to stains and moisture

Allows easy cleaning with a damp cloth, especially in premium variants

Smooth Finish

Offers a matte, satin, or glossy finish depending on the formulation

Ideal for achieving a modern, clean look

Breathable

Allows water vapor to pass through, preventing dampness buildup on walls

Good Coverage

Provides excellent hiding power, covering previous colors and imperfections effectively

Types of Emulsion Paint
Matte Emulsion

Non-reflective, ideal for concealing surface imperfections

Best for ceilings and low-traffic areas

Silk/Satin Emulsion

Slightly shiny finish, smooth to touch

Good for bedrooms and living rooms

Gloss/Sheen Emulsion

Reflective and durable

Suitable for kitchens, bathrooms, and high-traffic areas

Acrylic Emulsion

Contains acrylic resin for better durability and weather resistance

Suitable for both interiors and exteriors

Application Areas
Interior walls and ceilings

Exterior cemented walls (with weatherproof variants)

Plastered surfaces, drywall, concrete, and brickwork

Benefits of Using Emulsion Paint
Eco-friendly and low odor

Quick-drying with minimal surface preparation

Long-lasting color and finish

Easy to maintain and touch-up

Application Tips
Prepare the surface by cleaning and removing dust or grease

Apply a primer or wall sealer before emulsion for best results

Use a brush, roller, or spray depending on surface and area

Apply 2 coats for optimal color and finish`,
  },
  {
    id: 7,
    title: "Flex Coat 7in1 20Kg",
    price: 25000,
    oldPrice: 26500,
    image: Flex,
    description: `Flex Coat is a flexible, waterproof, and protective coating used on interior and exterior walls to resist cracks, moisture, and harsh weather conditions. It forms a thick, elastic film that stretches with the surface, making it ideal for walls that expand and contract due to temperature changes.

Key Features of Flex Coat
Flexible & Crack-Resistant

Elastic properties allow the coating to move with the wall

Prevents hairline cracks and covers minor imperfections

Waterproof Protection

Acts as a barrier against rain and dampness

Helps prevent water seepage into walls

Weather-Resistant

Withstands UV rays, heat, humidity, and pollution

Ideal for external walls exposed to harsh weather

Long-Lasting Finish

Durable and fade-resistant

Maintains fresh appearance for years

Breathable Coating

Allows moisture vapor to escape from walls

Prevents blistering and peeling of paint

Where to Use Flex Coat
Exterior walls of buildings, homes, and commercial properties

Cracked or uneven plaster surfaces

Areas prone to heavy rain or moisture

Roof parapets, boundary walls, and terraces (with waterproofing grade)

Benefits of Using Flex Coat
Prevents early wall damage and reduces maintenance

Enhances building aesthetics with smooth, seamless coverage

Available in various textures and colors

Increases paint life by protecting underlying layers

Application Tips
Clean and repair the surface before application

Apply primer if recommended by the manufacturer

Use brush, roller, or spray for even coating

Apply 2–3 coats for best performance, allowing proper drying time between coats`,
  },
  {
    id: 8,
    title: "Flex Coat 7in1 5Kg",
    price: 6650,
    oldPrice: 6750,
    image: Flexone,
    description: `Flex Coat is a flexible, waterproof, and protective coating used on interior and exterior walls to resist cracks, moisture, and harsh weather conditions. It forms a thick, elastic film that stretches with the surface, making it ideal for walls that expand and contract due to temperature changes.

Key Features of Flex Coat
Flexible & Crack-Resistant

Elastic properties allow the coating to move with the wall

Prevents hairline cracks and covers minor imperfections

Waterproof Protection

Acts as a barrier against rain and dampness

Helps prevent water seepage into walls

Weather-Resistant

Withstands UV rays, heat, humidity, and pollution

Ideal for external walls exposed to harsh weather

Long-Lasting Finish

Durable and fade-resistant

Maintains fresh appearance for years

Breathable Coating

Allows moisture vapor to escape from walls

Prevents blistering and peeling of paint

Where to Use Flex Coat
Exterior walls of buildings, homes, and commercial properties

Cracked or uneven plaster surfaces

Areas prone to heavy rain or moisture

Roof parapets, boundary walls, and terraces (with waterproofing grade)

Benefits of Using Flex Coat
Prevents early wall damage and reduces maintenance

Enhances building aesthetics with smooth, seamless coverage

Available in various textures and colors

Increases paint life by protecting underlying layers

Application Tips
Clean and repair the surface before application

Apply primer if recommended by the manufacturer

Use brush, roller, or spray for even coating

Apply 2–3 coats for best performance, allowing proper drying time between coats`,
  },
  {
    id: 8,
    title: "SBR Chemicals 5Kg",
    price: 650,
    oldPrice: 700,
    image: SBR,
    description: `SBR (Styrene Butadiene Rubber) is a high-performance liquid bonding agent and waterproofing additive used in construction. It improves the strength, flexibility, and adhesion of cement-based mixtures, making it ideal for repairs, waterproofing, and bonding applications.

Key Features of SBR Chemicals
Strong Bonding Agent

Enhances adhesion between old and new concrete, plaster, or mortar

Prevents separation and cracking at joints or repair areas

Waterproofing Additive

Reduces permeability of cementitious mixes

Offers protection against water penetration and dampness

Improves Flexibility

Adds elasticity to cement, reducing shrinkage and cracking

Ideal for surfaces exposed to movement or thermal expansion

Chemical & Abrasion Resistance

Resists oils, salts, mild acids, and alkalis

Increases surface durability, even in harsh environments

Multi-Purpose Use

Can be used as a bonding coat, waterproofing slurry, or additive in screed and plaster

Common Uses of SBR Chemicals
Waterproofing of bathrooms, basements, roofs, and terraces

Repair & bonding of old concrete to new concrete or plaster

Flooring where high mechanical strength or chemical resistance is needed

Tile fixing and plaster modification for improved durability

Benefits of SBR Chemical
Extends life of concrete and plaster

Reduces maintenance costs over time

Easy to mix and apply

Increases workability of mortar mixes

How to Use
Surface Preparation: Clean the area thoroughly

Bonding Slurry: Mix SBR with cement (1:1) and brush it onto the surface

Modified Mortar/Plaster: Add SBR into the water before mixing with cement/sand

Waterproofing Coat: Apply in two coats as per manufacturer’s recommendation`,
  },
  {
    id: 9,
    title: "Paint Roller 1.5 inches",
    price: 650,
    oldPrice: 700,
    image: Jannah,
    description: `A paint roller is a highly efficient and easy-to-use painting tool designed for covering large, flat surfaces such as walls, ceilings, and floors quickly and evenly. It features a sturdy handle, a durable frame, and a roller cover made from absorbent materials like fabric, microfiber, or foam that hold and release paint smoothly`,
  },
  {
    id: 10,
    title: "Paint Brush Single - Size 4 inches",

    price: 665,
    oldPrice: 720,
    image: Khood,
    description: `A single paint brush is a classic and versatile painting tool designed for detailed, controlled, and accurate application of paint on various surfaces. It consists of a comfortable handle, a metal ferrule, and high-quality bristles (natural or synthetic) that hold paint efficiently and deliver smooth results`,
  },
  {
    id: 3,
    title: "Paint Brush Double - Size 5 inches",
    price: 860,
    oldPrice: 920,
    image: Jannat,
    description: `
      The Double Paint Brush – Size 5 inches is a heavy-duty brush designed for fast and efficient coverage of large surfaces while maintaining smooth and even strokes. Built with premium-quality synthetic or natural bristles, this brush is perfect for professionals who need speed, accuracy, and durability
    `,
  },
  {
    id: 4,
    title: "Paint Brush Double - Size 4 inches",

    price: 665,
    oldPrice: 740,
    image: Khood,
    description: `The Double Paint Brush – Size 4 inches is a heavy-duty brush designed for fast and efficient coverage of large surfaces while maintaining smooth and even strokes. Built with premium-quality synthetic or natural bristles, this brush is perfect for professionals who need speed, accuracy, and durability.

` },
  {
    id: 5,
    title: "Scraper 3 inches",
    price: 80,
    oldPrice: 110,
    image: Day,
    description: `The 3-Inch Scraper is a compact yet powerful tool designed for removing paint, putty, adhesives, rust, and debris from various surfaces. Its sharp, durable blade and comfortable grip handle make it perfect for detailed surface preparation, ensuring a clean and smooth finish before painting or refinishing.

`},
  {
    id: 6,
    title: "Mini Rollar",
    price: 230,
    oldPrice: 280,
    image: Safa,
    description: `
     The Mini Paint Roller is a compact and highly efficient tool designed for precision painting in tight or detailed areas. Perfect for touch-ups, trims, corners, and narrow surfaces, this roller ensures smooth, even coverage without the mess of a full-sized roller or the strokes of a brush. `,
  },


];

const AllProduct = () => {
  const { addToCart } = useCart();
  const [visibleCount, setVisibleCount] = useState(3);
  const paginatedProducts = products.slice(0, visibleCount);

  const renderLoadMore = () => {
    if (visibleCount >= products.length) return null;

    return (
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setVisibleCount((prev) => prev + 3)}
          className="px-6 py-2 bg-[#FF0000] text-white rounded hover:bg-[#b5241f] transition"
        >
          More Books
        </button>
      </div>
    );
  };

  return (
    <div
      className=" bg-white "

    >
      <Container>
        <section className="py-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pb-20"
          >
            <h2 className="text-2xl font-semibold mb-8">New Arrivals</h2>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pb-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
              {paginatedProducts.map((product) => (
                <DynamicCard
                  key={product.id}
                  {...product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </motion.div>

          {/* Styled Pagination */}
          {renderLoadMore()}
        </section>
      </Container>
    </div>
  );
};

export default AllProduct;