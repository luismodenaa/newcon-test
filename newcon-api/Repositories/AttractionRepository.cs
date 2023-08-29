using Microsoft.EntityFrameworkCore;
using newcon_api.Database;
using newcon_api.Models;
using newcon_api.Repositories.Interface;

namespace newcon_api.Repositories
{
    public class AttractionRepository : IAttraction
    {
        private readonly AttractionContext _dbContext;

        public AttractionRepository(AttractionContext dbContext) 
        {
            _dbContext = dbContext;
        }

        public async Task<AttractionsModel> GetOneAttraction(int id)
        {
            var attraction = await _dbContext.Attractions.FirstOrDefaultAsync(x => x.Id == id) ?? throw new Exception("Ponto turístico não encontrado.");
            return attraction;

        }

        public async Task<AttractionsModel> AddAttraction(AttractionsModel attractions)
        {
            await _dbContext.Attractions.AddAsync(attractions);
            await _dbContext.SaveChangesAsync();

            return attractions;
        }
        public async Task<AttractionsModel> UpdateAttraction(AttractionsModel attractionData, int id)
        {
            AttractionsModel attraction = await GetOneAttraction(id) ?? throw new Exception("Ponto turístico não encontrado.");

            if (attractionData.State != null)
                attraction.State = attractionData.State;

            if (attractionData.City != null)
                attraction.City = attractionData.City;

            if (attractionData.Adress != null)
                attraction.Adress = attractionData.Adress;

            if (attractionData.Description != null)
                attraction.Description = attractionData.Description;

            if (attractionData.Name != null)
                attraction.Name = attractionData.Name;


            _dbContext.Attractions.Update(attraction);
            await _dbContext.SaveChangesAsync();

            return attraction;
        }

        public async Task<bool> DelAttraction(int id)
        {
            AttractionsModel attraction = await GetOneAttraction(id) ?? throw new Exception("Ponto turístico não encontrado.");
            
            _dbContext.Attractions.Remove(attraction);
            await _dbContext.SaveChangesAsync();

            return true;
        }

        public async Task<List<AttractionsModel>> GetAttractions(int page, int total)
        {
            return await _dbContext.Attractions
                .OrderByDescending(attraction => attraction.Id)
                .Skip(page * total)
                .Take(total)
                .ToListAsync();
        }

        public async Task<List<AttractionsModel>> SearchAttractions(string search, int page, int total)
        {
            var filteredAttractions = _dbContext
                .Attractions
                .Where(attraction =>
                    string.IsNullOrEmpty(search) ||
                    attraction.City.ToLower().Contains(search) ||
                    attraction.State.ToLower().Contains(search) ||
                    attraction.Name.ToLower().Contains(search) ||
                    attraction.Adress.ToLower().Contains(search)
                )
                .Skip(page * total)
                .Take(total)
                .ToList();

            return await Task.FromResult(filteredAttractions);
        }

    }
}
