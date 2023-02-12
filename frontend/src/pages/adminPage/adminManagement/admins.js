import React from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

export const AdminManagement = () => {
  return (
    <section className="w-[100%] xl:px-[4%] tablet:px-[6%] px-[4%] lg:px-[2%] ">
      <div class="container mx-auto">
        <div className="mb-16 gap-4 flex flex-wrap">
          <div className="flex  rounded-md justify-between bg-neutralColor w-full p-5">
            <h2>Add New Admin</h2>
            <IoAddOutline className="w-8 h-8 bg-primaryColor stroke-white" />
          </div>
          <div className="flex  rounded-md justify-between bg-neutralColor w-full p-5">
            <h2>Remove admin status</h2>
            <IoRemoveOutline className="w-8 h-8 bg-primaryColor stroke-white" />
          </div>
        </div>
        <div class="flex flex-wrap flex-col gap-6">
          <div class="w-full bg-neutralColor flex justify-between md:w-1/4  rounded-lg shadow-md p-5 flex-wrap gap-2 tablet:gap-8">
            <div class="  ">
              <p class="text-sm font-medium capitalize">auauusshshshjs@gmail.com</p>
              <p class="text-black text-2xl font-medium mt-4">auf</p>
              <p className=" text-base self-end text-primaryColor mt-4">Rank : Tier 1</p>
            </div>
            <p className="mt-4 tablet:mt-0 font-medium">Last seen : 19/10/20022 19.67</p>
          </div>
          <div class="w-full bg-neutralColor flex justify-between md:w-1/4  rounded-lg shadow-md p-5 flex-wrap gap-10">
            <div class="  ">
              <p class="text-sm font-medium capitalize">auauusshshshjs@gmail.com</p>
              <p class="text-black text-2xl font-medium mt-4">auf</p>
              <p className=" text-base self-end text-primaryColor mt-4">Rank : Tier 1</p>
            </div>
            <p className="mt-4 tablet:mt-0">Last seen : 19/10/20022 19.67</p>
          </div>
          <div class="w-full bg-neutralColor flex justify-between md:w-1/4  rounded-lg shadow-md p-5 flex-wrap gap-10">
            <div class="  ">
              <p class="text-sm font-medium capitalize">auauusshshshjs@gmail.com</p>
              <p class="text-black text-2xl font-medium mt-4">auf</p>
              <p className=" text-base self-end text-primaryColor mt-4">Rank : Tier 1</p>
            </div>
            <p className="mt-4 tablet:mt-0">Last seen : 19/10/20022 19.67</p>
          </div>
          <div class="w-full bg-neutralColor flex justify-between md:w-1/4  rounded-lg shadow-md p-5 flex-wrap gap-10">
            <div class="  ">
              <p class="text-sm font-medium capitalize">auauusshshshjs@gmail.com</p>
              <p class="text-black text-2xl font-medium mt-4">auf</p>
              <p className=" text-base self-end text-primaryColor mt-4">Rank : Tier 1</p>
            </div>
            <p className="mt-4 tablet:mt-0">Last seen : 19/10/20022 19.67</p>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h2 class="text-black text-xl font-medium mb-4">Admin action notifications</h2>
        <table class="w-full  text-left table-collapse">
          <thead>
            <tr>
              <th class="text-sm font-medium text-gray-600 p-2 bg-gray-100">Email</th>
              <th class="text-sm font-medium text-gray-600 p-2 bg-gray-100">Action</th>
              <th class="text-sm font-medium text-gray-600 p-2 bg-gray-100">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in newRegisteredUsers">
              <td class="p-2 border-t border-LightSecondaryColor">aeeeeeeeeeeeeeeuf</td>
              <td class="p-2 border-t border-LightSecondaryColor">akskkskskdsksks eeeee e eeeee eee</td>
              <td class="p-2 border-t border-LightSecondaryColor">19-2020202</td>
            </tr>
            <tr v-for="user in newRegisteredUsers">
              <td class="p-2 border-t border-LightSecondaryColor">auf</td>
              <td class="p-2 border-t border-LightSecondaryColor">akskkskskdsksks</td>
              <td class="p-2 border-t border-LightSecondaryColor">19-2020202</td>
            </tr>
            <tr v-for="user in newRegisteredUsers">
              <td class="p-2 border-t border-LightSecondaryColor">auf</td>
              <td class="p-2 border-t border-LightSecondaryColor">akskkskskdsksks</td>
              <td class="p-2 border-t border-LightSecondaryColor">19-2020202</td>
            </tr>
            <tr v-for="user in newRegisteredUsers">
              <td class="p-2 border-t border-LightSecondaryColor">auf</td>
              <td class="p-2 border-t border-LightSecondaryColor">akskkskskdsksks</td>
              <td class="p-2 border-t border-LightSecondaryColor">19-2020202</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
