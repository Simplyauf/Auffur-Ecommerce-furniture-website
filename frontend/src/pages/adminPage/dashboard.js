import React from "react";

export const Dashboard = () => {
  return (
    <section className="w-[100%] xl:px-[4%] px-[4%] lg:px-[2%] ">
      <div class="container mx-auto">
        <div class="flex flex-wrap flex-col tablet:flex-row md:flex-row gap-6">
          <div class="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
            <div class="  ">
              <h3 class="text-lg font-medium">Total Visits</h3>
              <p class="text-black text-3xl font-medium mt-4">12,345</p>
            </div>
            <p className=" text-base self-end text-primaryColor">Across lifetime</p>
          </div>
          <div class="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
            <div class="  ">
              <h3 class="text-lg font-medium">Orders</h3>
              <p class="text-black text-3xl font-medium mt-4">567</p>
            </div>
            <p className=" text-base self-end text-primaryColor">Across lifetime</p>
          </div>
          <div class="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
            <div class="  ">
              <h3 class="text-lg font-medium">Sales</h3>
              <p class="text-black text-3xl font-medium mt-4">$7,890</p>
            </div>
            <p className=" text-base self-end text-primaryColor">Across lifetime</p>
          </div>
          <div class="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
            <div class="  ">
              <h3 class="text-lg font-medium">Registered Users</h3>
              <p class="text-black text-3xl font-medium mt-4">1,234</p>
            </div>
            <p className=" text-base self-end text-primaryColor">Across lifetime</p>
          </div>
          <div class="w-full bg-neutralColor flex justify-between lg:w-[30%] md:w-[45%] xl:w-1/4  rounded-lg shadow-md p-5">
            <div class="  ">
              <h3 class="text-lg font-medium">Verified Users</h3>
              <p class="text-black text-3xl font-medium mt-4">678</p>
            </div>
            <p className=" text-base self-end text-primaryColor">Across lifetime</p>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h2 class="text-black text-lg font-medium mb-4">New Registered Users</h2>
        <table class="w-full  text-left table-collapse">
          <thead>
            <tr>
              <th class="text-sm font-medium text-gray-600 p-2 bg-gray-100">Name</th>
              <th class="text-sm font-medium text-gray-600 p-2 bg-gray-100">Email</th>
              <th class="text-sm font-medium text-gray-600 p-2 bg-gray-100">Date</th>
            </tr>
          </thead>
          <tbody>
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
