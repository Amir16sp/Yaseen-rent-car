import React from 'react'
import { motion } from "framer-motion";
const benifit = () => {
  return (
    <>
      <div className="overflow-x-auto p-4  bg-blue-900/70 ">
        <table className="min-w-full bg-white border border-black text-sm text-left text-black">
          <caption className="caption-top text-xl font-bold mb-4 text-center mt-20">
            PRODUCT DATA
          </caption>
          <tbody>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Tensile strength</td>
              <td className="p-2">375 psi</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Elongation</td>
              <td className="p-2">560%</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Shore hardness</td>
              <td className="p-2">4Kg/cm²</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Tear strength</td>
              <td className="p-2">23 Kg/cm²</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Adhesion to concrete</td>
              <td className="p-2">13.5Kg/cm²</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Abrasion resistance</td>
              <td className="p-2">abrasions wear (Wear index135)</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Specific gravity</td>
              <td className="p-2">1.28 @ 23° C</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Recovery</td>
              <td className="p-2">90%</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Solid content</td>
              <td className="p-2">65% min.</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Flash point</td>
              <td className="p-2">Nil</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Finish</td>
              <td className="p-2">Matt</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Fire Resistance of wet film</td>
              <td className="p-2">Non-flammable</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Drying time @ 25° c</td>
              <td className="p-2">Touch dry: 1 hour<br />Hard dry: 24 hours<br />Full cure: 7 days</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Water vapor transmission</td>
              <td className="p-2">45 gms / m² per 24 hours</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Chloride ion diffusivity</td>
              <td className="p-2">4.98 × 10<sup>-11</sup> cm²/sec</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Reduction in chloride ion ingress @ 28 days</td>
              <td className="p-2">94%</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Carbon dioxide diffusion</td>
              <td className="p-2">R value at 325 microns greater than 16m</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Application temperature</td>
              <td className="p-2">5°C to 50°C</td>
            </tr>
            <tr className="border border-black">
              <td className="p-2 font-semibold">Chemical resistance</td>
              <td className="p-2">Resistant to spillage of gasoline, diesel, sewage, weak acids and alkalis</td>
            </tr>
          </tbody>
        </table>
      </div>

      


      {/* Quote Section */}

    </>
  );
};


export default benifit;

