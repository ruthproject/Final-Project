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

    public class ProjectsController : ApiController
    {
        // GET api/Projects

        public IEnumerable<TProjectDTO> Get()
        {

            return new ProjectBL().GetAll();
        }

        // GET api/Projects
        //[HttpGet]
        //public string fff()
        //{
        //    return new ProjectBL().ff();
        //}

        // GET api/Project
        public TProjectDTO Get(int id)
        {
            return new ProjectBL().GetProjectById(id);
        }
        

        //POST api/values
        public void Post([FromBody] TProjectDTO value)
        {
            new ProjectBL().Post(value);
        }

        // PUT api/User
        public void Put(int id, [FromBody] TProjectDTO value)
        {
            new ProjectBL().Put(id, value);
        }

        // DELETE api/Project
        public void Delete(int id)
        {
            new ProjectBL().Delete(id);
        }
        [HttpGet]
        public IEnumerable<TStudentDTO> GetProjectToStu(int id)
        {
            return new ProjectBL().GetStudentsByProject(id);
        }
    }
}