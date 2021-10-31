using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BL;
using DTO.tables;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AssistantHoursController : ApiController
    {
        // GET api/AssistantHours

        //public IEnumerable<TAssistantHoursDTO> Get()
        //{
        //    return new AssistantHoursBL().GetAll();
        //}

        //GET api/Assistant

        public IEnumerable<TAssistantHoursDTO> Get(int id)
        {
            return new AssistantHoursBL().GetAssistantHoursById(id);
        }



        //POST api/values
        public void Post([FromBody] TAssistantHoursDTO value)
        {
            new AssistantHoursBL().Post(value);
        }

        //// PUT api/Assistant
        public void Put(int id, [FromBody] TAssistantHoursDTO value)
        {
            new AssistantHoursBL().Put(id, value);
        }

        //// DELETE api/Assistant
        public void Delete(int id)
        {
            new AssistantHoursBL().Delete(id);
        }
    }
}










