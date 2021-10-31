using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
 public   class TGradeDTO
    {
        public int GradeId { get; set; }
        public string GradeName { get; set; }
        public Nullable<int> GradeIdSchool { get; set; }
    }
}
