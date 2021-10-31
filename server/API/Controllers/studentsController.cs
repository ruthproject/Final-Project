using BL;
using DTO.tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;


namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class StudentsController : ApiController
    {
        // GET api/Students

        public IEnumerable<TStudentDTO> Get()
        {

            return new StudentBL().GetAll();
        }

        //// GET api/User
        //public TUserDTO Get(int id)
        //{
        //    return new UserBL().GetUserById(id);
        //}

        /////////////////////////////////////////////////////////////

        ////POST api/values
        //public void Post([FromBody] TUserDTO value)
        //{
        //    new UserBL().Post(value);
        //}

        ////// PUT api/User
        //public void Put(int id, [FromBody] TUserDTO value)
        //{
        //    new UserBL().Put(id, value);
        //}

        ////// DELETE api/User
        //public void Delete(int id)
        //{
        //    new UserBL().Delete(id);
        //}
    }
}