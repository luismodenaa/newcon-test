using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using newcon_api.Models;
using newcon_api.Repositories;
using newcon_api.Repositories.Interface;
using System.Collections.Generic;

namespace newcon_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttractionsController : ControllerBase
    {
        private readonly IAttraction _attractionRepository;
        public AttractionsController(IAttraction attractionRepository)
        {
            _attractionRepository = attractionRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<AttractionsModel>>> GetAttractions(int page, int total)
        {
            List<AttractionsModel> attractions = await _attractionRepository.GetAttractions(page, total);

            return Ok(attractions);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AttractionsModel>> GetOneAttraction(int id)
        {
            AttractionsModel attraction = await _attractionRepository.GetOneAttraction(id);

            return Ok(attraction);
        }

        [HttpGet("search/{search}")]
        public async Task<ActionResult<List<AttractionsModel>>> SearchAttractions(string search, int page, int total)
        {
            List<AttractionsModel> attraction = await _attractionRepository.SearchAttractions(search, page, total);

            return Ok(attraction);
        }

        [HttpPost()]
        public async Task<ActionResult<AttractionsModel>> AddAttraction([FromBody] AttractionsModel attractionData)
        {
            AttractionsModel attraction = await _attractionRepository.AddAttraction(attractionData);

            return Created("Cadastrado", attraction);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<AttractionsModel>> UpdateAttraction([FromBody] AttractionsModel attractionData, int id)
        {
            AttractionsModel attraction = await _attractionRepository.UpdateAttraction(attractionData, id);

            return Ok(attraction);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<AttractionsModel>> DelAttraction(int id)
        {
            await _attractionRepository.DelAttraction(id);

            return  NoContent();
        }
    }
}
