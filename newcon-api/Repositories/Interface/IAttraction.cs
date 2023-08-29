using Microsoft.AspNetCore.JsonPatch;
using newcon_api.Models;

namespace newcon_api.Repositories.Interface
{
    public interface IAttraction
    {
        Task<List<AttractionsModel>> GetAttractions(int page, int total);
        Task<List<AttractionsModel>> SearchAttractions(string search, int page, int total);
        Task<AttractionsModel> GetOneAttraction(int id); 
        Task<AttractionsModel> AddAttraction(AttractionsModel attraction);
        Task<AttractionsModel> UpdateAttraction(AttractionsModel attraction, int id);
        Task<bool> DelAttraction(int id);
    }
}
