id
name
address
city ** search by
state 
postal_code
image
reserve_url
price ** search

Sample output
{
id: 7267,
name: "10pin Bowling Lounge",
address: "330 N State Street",
city: "Chicago",
state: "IL",
area: "Chicago / Illinois",
postal_code: "60610",
country: "US",
phone: "3126440300x",
lat: 41.888634,
lng: -87.628091,
price: 4,
reserve_url: "http://www.opentable.com/single.aspx?rid=7267",
mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=7267",
image_url: "https://www.opentable.com/img/restimages/7267.jpg"
},

rails g model Restaurant id:integer name:string 
address:string city:string state:string postal_code:string image:string 
reserve_url:string price:integer