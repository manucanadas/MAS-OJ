
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('details').del()
    .then(function () {
      // Inserts seed entries
      return knex('details').insert([
        {id: 1, location_id: 101, name: 'Mount Victoria Lookout Walkway', length: 4.6, duration: '1.5hrs', difficulty: 'Easy', dog_friendly: true },
        {id: 2, location_id: 101, name: 'Southern Walkway', length: 10.6, duration: '4-5hrs', difficulty: 'Average (good level of fitness', dog_friendly: true },
        {id: 3, location_id: 101, name: 'Brooklyn Wind Turbine Route', length: 6, duration: '2hrs', difficulty: 'Easy', dog_friendly: true },
        {id: 4, location_id: 101, name: 'Polhill Reserve Loop', length: 7.3, duration: '2hrs', difficulty: 'Average (good level of fitness', dog_friendly: true },
        {id: 5, location_id: 101, name: 'Ahumairangi Loop', length: 2.7, duration: '2hrs', difficulty: 'Easy', dog_friendly: true },
        {id: 6, location_id: 101, name: 'City to Sea Walkway', length: 14.4, duration: '6-7hrs', difficulty: 'Intermediate (good level of fitness', dog_friendly: true },
        
        {id: 7, location_id: 102, name: 'Te Araroa: Pukerua Bay to Paekakariki Escarpment Track - Stairway to heaven', length: 10.0, duration: '3-5hrs', difficulty: 'Challenging: mixed surface', dog_friendly: true },
        {id: 8, location_id: 102, name: 'Ara Harakeke Walkway', length: 9.0, duration: '2hrs 30mins', difficulty: 'Easy: sealed surface', dog_friendly: true },
        {id: 9, location_id: 102, name: 'Taua Tapu Track', length: 1.5, duration: '30mins', difficulty: 'Moderate: unsealed surface', dog_friendly: true },
        {id: 10, location_id: 102, name: 'Camborne Walkway', length: 3.2, duration: '30mins', difficulty: 'Easy: unsealed surface', dog_friendly: true },
        {id: 11, location_id: 102, name: 'Te Ara Piko Pathway and the Pauatahanui Wildlife Management Reserve', length: 3.2, duration: '50mins', difficulty: 'Easy: mixed surface', dog_friendly: true },
        {id: 12, location_id: 102, name: 'Bothamley Pathway', length: 4.2, duration: '1hr 10mins', difficulty: 'Easy: mixed surface, mainly gravel', dog_friendly: true },
       
        {id: 13, location_id: 103, name: 'Pencarrow Coast Rd', length: 13.1, duration: '2-3hrs', difficulty: 'Easy: flat walking track', dog_friendly: true },
        {id: 14, location_id: 103, name: 'Cameron Ridge Track', length: 3.2, duration: '1.1hrs', difficulty: 'Intermediate: Easier tramping track', dog_friendly: false },
        {id: 15, location_id: 103, name: 'Mackenzie Road Track', length: 4.2, duration: '1.45hrs', difficulty: 'Intermediate: Easier tramping track', dog_friendly: true },
        {id: 16, location_id: 103, name: 'Lighthouse Track', length: 2.0, duration: '1hr', difficulty: 'Intermediate: Easier tramping track', dog_friendly: true },
        {id: 17, location_id: 103, name: 'Orongorongo Track', length: 4.3, duration: '2hrs (one way)', difficulty: 'Easy', dog_friendly: true },
        {id: 18, location_id: 103, name: 'Main Ridge Track', length: 5.8, duration: '3hrs', difficulty: 'Easy', dog_friendly: true },
      
        {id: 19, location_id: 104, name: 'Cannonpoint and Birchville Dam Walk', length: 8.0, duration: '3hrs', difficulty: 'Easy', dog_friendly: false },
        {id: 20, location_id: 104, name: 'Karapoti Gorge', length: 12.5, duration: '3hrs', difficulty: 'Intermediate: Easier tramping track', dog_friendly: false },
        {id: 21, location_id: 104, name: 'Tane\'s Track', length: 2.3, duration: '60mins', difficulty: 'Easiest: Short walk', dog_friendly: true },
        {id: 22, location_id: 104, name: 'Rivendell', length: 0.5, duration: '15mins', difficulty: 'Easiest: Short walk', dog_friendly: true },
        {id: 23, location_id: 104, name: 'Pakuratahi River Walk', length: 1.1, duration: '40mins', difficulty: 'Easiest: Short walk', dog_friendly: true },
        {id: 24, location_id: 104, name: 'Swing bridge Track', length: 2.2, duration: '60mins', difficulty: 'Easiest: Short walk', dog_friendly: true },

      ]);
    });
};
