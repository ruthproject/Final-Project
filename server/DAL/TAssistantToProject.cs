//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class TAssistantToProject
    {
        public int AssistantToProjectId { get; set; }
        public Nullable<int> IdAssistant { get; set; }
        public Nullable<int> IdProject { get; set; }
    
        public virtual TAssistant TAssistant { get; set; }
        public virtual TProject TProject { get; set; }
    }
}
