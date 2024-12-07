"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
                description: `Just pay for the tests you practice. No need to commit for montly or yearly subscription`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-7.5 top-11.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                Beginer pack
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $18{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /pack
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                10 Tokens
              </h4>
              <p>Buy One pack with ten tokens to discounted price per token</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Ten practice tests
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    One test per token
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Evaluation
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    feeback
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                    Suggestions to improve
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                Fair pack
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $51{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /pack
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                30 Tokens
              </h4>
              <p>
                Buy One pack with thirty tokens to discounted price per token
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Thirty practice tests
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    One test per token
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Evaluation
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    feeback
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                    Suggestions to improve
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-7.5 top-13 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                Advanced pack
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $80{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /pack
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                50 Tokens
              </h4>
              <p>
                Buy One pack with fifty tokens to discounted price per token
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Fifty practice tests
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    One test per token
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Evaluation
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    feeback
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                    Suggestions to improve
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $2{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /token
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Token
              </h4>
              <p>
                Buy One token to generate one test and get our evaluation and
                feedback for free
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    One test per token
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Evaluation
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    feeback
                  </li>
                  <li className="mb-4 text-black  last:mb-0 dark:text-manatee">
                    Suggestions to improve
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
