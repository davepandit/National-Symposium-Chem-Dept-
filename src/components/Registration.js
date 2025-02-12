import React, { useEffect, useState } from "react";
import registrationQR from "../img/updated-scanner.jpg";
import { FlaskConical, Atom, FlaskRound, Dna, Beaker } from "lucide-react";
import reg_bg from "../img/reg_bg_03.webp";

const registrationFees = [
  { category: "UG/PG Students", fee: 1000 },
  { category: "Research Scholars", fee: 2000 },
  { category: "Postdoctoral Fellows", fee: 2500 },
  { category: "Faculty/Scientists", fee: 4000 },
  { category: "Industry Delegates", fee: 7000 },
];

const ChemistryIcons = () => {
  const icons = [FlaskConical, Atom, FlaskRound, Dna, Beaker];
  const [positions, setPositions] = useState(
    Array(10)
      .fill()
      .map(() => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {positions.map((pos, index) => {
        const Icon = icons[index % icons.length];
        return (
          <Icon
            key={index}
            className="absolute text-blue-400 opacity-50 animate-rise"
            style={{ left: pos.left, animationDelay: pos.animationDelay }}
            size={32}
          />
        );
      })}
    </div>
  );
};

const Registration = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="registration">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${reg_bg})` }}
      ></div>
      <div className="absolute inset-0 z-10">
        <ChemistryIcons />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Registration
        </h2>
        <div className="text-red-600 text-center mb-12 mt-5">
          Click the register button below to register.
        </div>

        <div className="bg-transparent rounded-lg shadow-lg p-8 relative z-20">
          <h3 className="text-2xl font-bold mb-4">Registration Fees</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 relative z-20">
              <thead className="bg-transparent">
                <tr>
                  <th className="px-6 py-3 text-left font-bold text-sm text-gray-900  uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-center font-bold text-sm text-gray-900 uppercase">
                    Fee (INR)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-transaparent divide-y divide-gray-200">
                {registrationFees.map((fee, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {fee.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                      {fee.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-red-600 font-semibold mb-4">
              Registration Deadline: 31<sup>st</sup> April 2025
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block"
            >
              Register here
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Account Details for Payment
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Account: NITK Surathkal</li>
                <li>Account No.: 37772503911</li>
                <li>Bank Name: SBI, NITK</li>
                <li>IFSC Code: SBIN0002273</li>
                <li>MICR Code: 575002013</li>
                <li>SWIFT Code: SBININBB146</li>
                <li>UPI ID: xyz3911.948@sbi</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4">UPI Details</h3>
              <img
                src={registrationQR}
                alt="Registration Payment QR Code"
                className="w-40 h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes rise {
            0% { transform: translateY(100vh); opacity: 0; }
            100% { transform: translateY(-10vh); opacity: 1; }
          }
          .animate-rise {
            animation: rise 6s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Registration;
