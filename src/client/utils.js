const Utils = () => {
  const searchFormat = (string) => {
    string = string.replace(/\s+/g, '+');
    return string;
  };
  const fetchApi = async (query) => {
    const res = await fetch(`/api/${query}`);
    const data = await res.json();

    return data;
  };

  const fakeApi = async (query) => {
    console.log(query);
    return {
      StoreID: '7726',
      IsDeliveryStore: true,
      MinDistance: 0.8,
      MaxDistance: 0.8,
      Phone: '619-444-3030',
      AddressDescription:
        '1787 E. Main St\nEl Cajon, CA 92021\nE Main St between Greenfield and Pepper',
      HolidaysDescription: '11/26 Closed',
      HoursDescription: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
      ServiceHoursDescription: {
        Carryout: 'Su-Sa 10:30am-10:00pm',
        Delivery: 'Su-Th 10:30am-12:00am\nFr-Sa 10:30am-1:00am',
        DriveUpCarryout: 'Su-Sa 4:00pm-9:00pm',
      },
      IsOnlineCapable: true,
      IsOnlineNow: true,
      IsNEONow: false,
      IsSpanish: true,
      LocationInfo: 'E Main St between Greenfield and Pepper',
      LanguageLocationInfo: { en: 'E Main St between Greenfield and Pepper' },
      AllowDeliveryOrders: true,
      AllowCarryoutOrders: true,
      AllowDuc: true,
      ServiceMethodEstimatedWaitMinutes: {
        Delivery: { Min: 32, Max: 42 },
        Carryout: { Min: 10, Max: 15 },
      },
      StoreCoordinates: {
        StoreLatitude: '32.814528',
        StoreLongitude: '-116.916605',
      },
      AllowPickupWindowOrders: false,
      ContactlessDelivery: 'REQUIRED',
      ContactlessCarryout: 'DISABLED',
      IsOpen: true,
      ServiceIsOpen: { Carryout: true, Delivery: true, DriveUpCarryout: false },
    };
  };
  return { fakeApi, searchFormat };
};
export default Utils;
