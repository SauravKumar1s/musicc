import Layout from "@/components/layout";
import React from "react";
import DropMenu from "@/components/select";
import { MdMoreVert, MdExpandMore } from "react-icons/md";
import InputField from "@/components/inputfield";
import { useState } from "react";
import RadioButton from "@/components/checkbox";

const userdashboard = () => {
  const [open, setClose] = useState(true);

  return (
    <div className=" pt-20 container mx-auto">
      <Layout>
        <div className=" px-4 py-6">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className=" px-3 py-5 rounded-[5px]  ">
              <div className="mb-10">
                <h5 className=" text-[20px] font-semibold text-white_300  leading-[50%]">
                  Your Licenses
                </h5>
                <p className=" text-[14px] mt-8 text-white_100 leading-[18px]">
                  We recommend to use our stock contract. However, you can{" "}
                  <br /> edit and personalize your licenses according to your
                  needs.
                </p>
              </div>
              <div className="">
                <div className=" mt- grid gap-2 sm:grid-cols-2">
                  <div>
                    <InputField className={"py-4"} placeholder={"First Name"} />
                  </div>
                  <div>
                    <InputField className={"py-4"} placeholder={"Last Name"} />
                  </div>
                </div>
                <div>
                  <InputField
                    className={"py-4 mt-4"}
                    placeholder={"Display/Stage Name"}
                  />
                </div>

                <div>
                  <InputField
                    className={"py-4 mt-4"}
                    placeholder={"Email Id"}
                  />
                </div>

                <div className=" mt- grid gap-2 sm:grid-cols-2">
                  <div>
                    <InputField
                      className={"py-4 mt-4"}
                      placeholder={"Country"}
                    />
                  </div>
                  <div>
                    <InputField className={"py-4 mt-4"} placeholder={"State"} />
                  </div>
                </div>
              </div>

              <div className=" mt-5 flex gap-4">
                {" "}
                <button className=" capitalize bg-yellow text-black_100 text-[14px] rounded-[5px] font-normal text-center px-8 py-2">
                  update
                </button>
                <button className=" capitalize   bg-bt_color border-[1px]  border-yellow text-yellow text-[14px] rounded-[5px] font-normal text-center px-8 py-2">
                  Cancel
                </button>
              </div>
            </div>
            <div className=" px-3 py-5 rounded-[5px] ">
            <div className="mb-10">
                <h5 className=" text-[20px] font-semibold text-white_300  leading-[50%]">
                  Your Licenses
                </h5>
                <p className=" text-[14px] mt-8 text-white_100 leading-[18px]">
                  We recommend to use our stock contract. However, you can{" "}
                  <br /> edit and personalize your licenses according to your
                  needs.
                </p>
              </div>
              <div>
                <div>
                  <InputField className={"py-4 "} placeholder={"Address"} />
                </div>
                <div>
                  <InputField className={"py-4 mt-4"} placeholder={"Country"} />
                </div>
                <div>
                  <InputField className={"py-4 mt-4"} placeholder={"City"} />
                </div>
                <div className=" mt- grid gap-2 sm:grid-cols-2">
                  <div>
                    <InputField className={"py-4 mt-4"} placeholder={"State"} />
                  </div>
                  <div>
                    <InputField
                      className={"py-4 mt-4"}
                      placeholder={"Pin Code"}
                    />
                  </div>
                </div>
              </div>

              <div className=" mt-5 flex gap-4">
                {" "}
                <button className=" capitalize bg-yellow text-black_100 text-[14px] rounded-[5px] font-normal text-center px-8 py-2">
                  update
                </button>
                <button className=" capitalize   bg-bt_color border-[1px]  border-yellow text-yellow text-[14px] rounded-[5px] font-normal text-center px-8 py-2">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default userdashboard;
