// const dateVisited = "visitDate";
// const owed = "amountBilled";
// const patient = "patientName";

// let doctor = {
//   officeName: "Doctor's Office",
//   streetAddress: "123 Doctor Street",
//   doctorName: "Dr. Doktour Givemethenews",
//   patientName: "Pat Patience",
//   visitDate: "01/01/2019",
//   amountBilled: "$200",
//   dueDate: "01/10/2019"
// };

// // Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

// // Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

// // console.log(doctor[dateVisited])
// // console.log(doctor[owed])
// // console.log(doctor[patient])

// for (let keys of Object.keys(doctor)) {
//   console.log(keys);
//   document.querySelector(".container").innerHTML += keys + `<br>`;
// }

// for (let values of Object.values(doctor)) {
//   console.log(values);
// }

// // Lightning Exercise 1: Create an object to represent your favorite dinner item
// //(e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property,
// //but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

// // Lightning Exercise 2: Output all of the key/value pairs into the DOM
// // inside an <article> element with a class of food.

let dinner = {
  name: "hotdog",
  temp: "hot",
  type: "dog"
};

for (let entries of Object.entries(dinner)) {
  console.log(entries);
  document.querySelector(".container").innerHTML += `<article class="food">${
    entries[0]
  }: ${entries[1]}</article>`;
}
/* END LIGHTNING EXERCISES */

const salesByWeek = [
  {
    vehicle: {
      year: 2013,
      model: "Tanex",
      make: "Tamp-dax",
      color: "quartz"
    },
    sales_id: "782a23fd-8b83-4497-b9a1-41fd9b15648e",
    sales_agent: {
      mobile: "1-584-162-7444",
      last_name: "Larkin",
      first_name: "Tiara",
      email: "ready@gmail.com"
    },
    purchase_date: "2017-06-07",
    gross_profit: 210,
    credit: {
      credit_provider: "United Services Automobile Assoc.",
      account: "491697193540559"
    }
  },
  {
    vehicle: {
      year: 2012,
      model: "Volttanphase",
      make: "Tinlotis",
      color: "french fuchsia"
    },
    sales_id: "c6775819-5d17-40db-94f4-00425db590ee",
    sales_agent: {
      mobile: "1-573-820-3780",
      last_name: "Schulist",
      first_name: "Vada",
      email: "davin@outlook.com"
    },
    purchase_date: "2017-08-06",
    gross_profit: 1886.61,
    credit: {
      credit_provider: "TD Group US Holding",
      account: "494781657570"
    }
  },
  {
    vehicle: {
      year: 2013,
      model: "Lexi-ton",
      make: "Ware-com",
      color: "metallic brown"
    },
    sales_id: "d10631e7-24ca-414b-ac0f-34b286a30f14",
    sales_agent: {
      mobile: "1-356-831-5782",
      last_name: "Leannon",
      first_name: "Geovanni",
      email: "need@hotmail.com"
    },
    purchase_date: "2017-12-27",
    gross_profit: 154.91,
    credit: {
      credit_provider: "State Street Corporation",
      account: "546417363501851"
    }
  },
  {
    vehicle: {
      year: 2011,
      model: "Onto-zun",
      make: "Strongzoom",
      color: "medium slate blue"
    },
    sales_id: "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
    sales_agent: {
      mobile: "774.020.0247",
      last_name: "Lang",
      first_name: "Jovani",
      email: "spell55@yahoo.com"
    },
    purchase_date: "2017-03-05",
    gross_profit: 814.49,
    credit: {
      credit_provider: "M&T Bank Corporation",
      account: "34730046974022"
    }
  },
  {
    vehicle: {
      year: 2014,
      model: "Blue-run",
      make: "Kon-flex",
      color: "lumber"
    },
    sales_id: "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
    sales_agent: {
      mobile: "886.374.3898",
      last_name: "Feil",
      first_name: "Kory",
      email: "ducimus@outlook.com"
    },
    purchase_date: "2017-02-08",
    gross_profit: 587.52,
    credit: {
      credit_provider: "Atlantic Bank",
      account: "601149379893233"
    }
  }
];

// Randall has come back with a new job for you. Each week, he wants to see a report of how many cars
// each salesperson sells for that week. Here's his requirements to display for each sale.

// Display the first and last name of the sales agent.
// Display all keys and values for the car sold.
// Display the gross profit made on the sale.

salesByWeek.forEach(sale => {
  let agent = "";
  let car = [];
  let profit = 0;
  console.log(sale);
  car = Object.entries(sale.vehicle);
  agent = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`;
  profit = sale.gross_profit;
  console.log(agent);
  console.log(car);
  console.log(profit);
  document.querySelector(".container").innerHTML += `<h1>${agent}</h1>
    <ul>
        <li>${car[0][0]}: ${car[0][1]}</li>
        <li>${car[1][0]}: ${car[1][1]}</li>
        <li>${car[2][0]}: ${car[2][1]}</li>
        <li>${car[3][0]}: ${car[3][1]}</li>
    </ul>
    <h2>${profit}</h2>
    <hr>
    `;
});

const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("keypress", event => {
  document.querySelector(".container").innerHTML = "";
  if (event.charCode === 13) {
    const searchTerm = event.target.value;
    console.log(searchTerm)
    salesByWeek.forEach(sale => {
        console.log(Object.values(sale.sales_agent).includes("a"))
      if (Object.values(sale.sales_agent).includes(searchTerm)) {
        document.querySelector(".container").innerHTML += `<h1>${agent}</h1>
            <ul>
                <li>${car[0][0]}: ${car[0][1]}</li>
                <li>${car[1][0]}: ${car[1][1]}</li>
                <li>${car[2][0]}: ${car[2][1]}</li>
                <li>${car[3][0]}: ${car[3][1]}</li>
            </ul>
            <h2>${profit}</h2>
            <hr>
            `;
      }
    });
  }
});
