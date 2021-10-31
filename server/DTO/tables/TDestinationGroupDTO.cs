using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DTO.tables
{
   public class TDestinationGroupDTO
    {
        public int DestinationId { get; set; }
        public Nullable<int> GradeId { get; set; }
        public Nullable<int> DestinationTypeId { get; set; }
        public Nullable<int> DestinationDate { get; set; }

        public  TDestinationTypeDTO TDestinationTypeDTO { get; set; }
        public  TGradeDTO TGradeDTO { get; set; }


    }
}
