using BL;
using DTO.tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;


namespace API.Controllers
{

        [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class AssistantInProjectController  : ApiController
    {
        // GET api/Assistants

        //public IEnumerable<TAssistantDTO> Get()
        //{

        //    return new AssistantBL().GetAll();
        //}

        // GET api/Assistant
        public IEnumerable<TAssistantToProjectDTO> Get(int id)
        {
            return new AssistantToProjectBL().GetAssistantById(id);
        }

        // GET api/project to current ass
        [HttpGet]
        public IEnumerable<TProjectDTO> GetProjectToAss(int id)
        {
            return new AssistantToProjectBL().GetProjectByIdAss(id);
        }

        //POST api/values
        //public void Post([FromBody] TAssistantDTO value)
        //{
        //    new AssistantBL().Post(value);
        //}

        // PUT api/Assistant
        // public void Put(int id, [FromBody] TAssistantDTO value)
        //{
        //    new AssistantBL().Put(id, value);
        //}

        // DELETE api/Assistant
        //public void Delete(int id)
        //{
        //    new AssistantBL().Delete(id);
        //}
    }
}