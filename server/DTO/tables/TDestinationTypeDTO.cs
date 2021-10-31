using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
   public class TDestinationTypeDTO
    {
        public int DestinationTypeId { get; set; }
        public string DestinationTypeName { get; set; }
        public Nullable<int> ProfessionId { get; set; }

        public  ICollection<TDestinationGroupDTO> TDestinationGroupsDTO { get; set; }
        public  TProfessionDTO TProfessionDTO { get; set; }
    }
}
