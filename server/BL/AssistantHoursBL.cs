using System;
using DAL;
using DTO.tables;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using conv = BL.Convert;
namespace BL
{
    public class AssistantHoursBL
    {
        //public IEnumerable<TAssistantHoursDTO> GetAll()
        //{
        //    var list = new AssistantHourDAL().GetAllAssistantHours();
        //    foreach (var assistantHour in list)
        //    {
        //        yield return (TAssistantHoursDTO)conv.convert(assistantHour);
        //    }
        //}

        public IEnumerable<TAssistantHoursDTO> GetAssistantHoursById(int id)
        {
            var list = new AssistantHourDAL().GetAllAssistantHours(id);
            foreach (var assistantHour in list)
            {
                yield return (TAssistantHoursDTO)conv.convert(assistantHour);
            }

        }


        public void Post(TAssistantHoursDTO value)
        {
            new AssistantHourDAL().Post((TAssistantHour)conv.convert(value));
        }

        public void Put(int id, TAssistantHoursDTO value)
        {
            new AssistantHourDAL().Put(id, (TAssistantHour)conv.convert(value));
        }

        public void Delete(int id)
        {
            new AssistantHourDAL().Delete(id);
        }
    }
}
