<template>
  <div>
    <v-table fixed-header height="300px">
      <thead class="text-head-table">
        <tr>
          <th class="text-left">ลำดับ</th>
          <th class="text-left">ชื่อนามสกุลภาษาไทย</th>
          <th class="text-left">หมายเลขบัตรประชาชน</th>
          <th class="text-left">Family Name and First Name</th>
          <th class="text-left">No.passport</th>
          <th class="text-left">วันที่ออก</th>
          <th class="text-left">วันที่หมด</th>
          <th class="text-left">ว/ด/ป เกิด</th>
          <th class="text-left">สัญชาติ</th>
          <th class="text-left">เพศ</th>
          <th class="text-left">เตียง</th>
          <th class="text-left">ตรวจลงตราเลขที่</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.no }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.Id }}</td>
          <td>{{ item.family_name }}</td>
          <td>{{ item.passport }}</td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.expired_at }}</td>
          <td>{{ item.dob }}</td>
          <td>{{ item.nationality }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.bed_type }}</td>
          <td>{{ item.no_check }}</td>
        </tr>
      </tbody>
    </v-table>

    <v-expansion-panels>
      <v-expansion-panel title="Title" text="hi" style="max-width: 70%">
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          no: 1,
          name: "สวัสดี หมีหอม",
          Id: 1234567891234,
          family_name: "อะไรไม่รู้",
          passport: 25885455866,
          created_at: "25/05/66",
          expired_at: "25/05/66",
          dob: "25/05/66",
          nationality: "TH",
          gender: "ชาย",
          bed_type: "คู่",
          no_check: 15,
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-head-table {
  font-size: 15px;
}
</style>
