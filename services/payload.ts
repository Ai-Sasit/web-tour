export const group_members = (
  tour_id: string,
  thai_name: string,
  eng_name: string,
  country: string,
  sequences: string
) => {
  return {
    fields: {
      tour_id: {
        stringValue: tour_id,
      },
      thai_name: {
        stringValue: thai_name,
      },
      eng_name: {
        stringValue: eng_name,
      },
      country: {
        stringValue: country,
      },
      sequences: {
        stringValue: sequences,
      },
    },
  };
};
