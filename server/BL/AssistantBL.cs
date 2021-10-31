using DAL;
using DTO.tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using conv = BL.Convert;


namespace BL
{
   public class AssistantBL
    {
        public IEnumerable<TAssistantDTO> GetAll()
        {
            var list = new AssistantDAL().GetAllAssistant();
            foreach (var ass in list)
            {
                yield return (TAssistantDTO)conv.convert(ass);
            }
        }

        public TAssistantDTO GetAssistantById(int id)
        {
            
            return (TAssistantDTO)conv.convert(new AssistantDAL().GetAssistant(id));
        }

        
        public void Post(TAssistantDTO value)
        {
          new  AssistantDAL().Post((TAssistant)conv.convert(value));
        }

        public void Put(int id, TAssistantDTO value)
        {
            new AssistantDAL().Put(id,(TAssistant)conv.convert(value));
        }

        public void Delete(int id)
        {
            new AssistantDAL().Delete(id);
        }
    }
}
