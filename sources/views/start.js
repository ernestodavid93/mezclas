

export default {

	
        view:"scrollview", id:"verses", 
        scroll:"y",
		body:{
			rows:[
				{
		view:"form", 
		id:"log_form",
		
		elements:[

			{
				cols: [
					{
					
						
					view: "fieldset",
					label: "Información de solicitud",
					body: {
						rows: [
							{
              

                cols:[

					{
                        view: "radio",id: "cliente", name:"cliente", label: "Cliente/Hospital", labelPosition:"top", 
						options:[
							{ id:"FAA", value:"Antiguo Hospital Civil (Alcalde)" }, 
							{ id:"JIM", value:"Nuevo Hospital Civil (Menchaca)" }, 
						],
						  value:"FAA"
                    },

                    
					{
                        view: "text",id: "nom_doc", name:"nom_doc", label: "Medico solicitante", labelPosition:"top",required: "true",
                    },
                  

                  
                    
                 

                ]
              },

              {
                cols:[
					{
                        view: "text",id: "serv", name:"serv", label: "Servicio", labelPosition:"top",required: "true",
                    },
					{
                        view: "datepicker",id: "elabora", name:"elabora", label: "Fecha de Elaboracion", labelPosition:"top",  labelWidth:150, 
                    },
					{
                        view: "datepicker",id: "entrega", name:"entrega", label: "Fecha de Entrega", labelPosition:"top",  labelWidth:150, 
                    },
                    {
                        view: "text",id: "folio", name:"folio", label: "Numero de folio", labelPosition:"top",  labelWidth:150, required: "true",
                    },
        
				]
			}
		]
	},
}
	
				]

			},

			{
			
			cols: [
					{
						
						view: "fieldset",
					label: "Información de paciente",
					body: {
						rows: [
							{
              

                cols:[

					{
                        view: "text",id: "cedula", name:"cedula", label: "Cedula", labelPosition:"top",  labelWidth:150,
                    },

                    {
                        view: "text",id: "nom", name:"nom", label: "Nombres(s) Paciente", labelPosition:"top",  labelWidth:150,required: "true",
                    },

					{
                        view: "text",id: "pat", name:"pat", label: "Paterno", labelPosition:"top",  labelWidth:150, 
                    },

                    {
                        view: "text",id: "mat", name:"mat", label: "Materno", labelPosition:"top",  labelWidth:150, 

                    },
					{
                        view: "text",id: "piso", name:"piso", label: "Piso", labelPosition:"top",  labelWidth:150, 

                    },

                  
                    
                 

                ]
              },

              {
                cols:[
					{
                        view: "text",id: "diag", name:"diag", label: "Diagnostico", labelPosition:"top",  minWidth:250, required: "true",
                    },
					{
                        view: "datepicker",id: "fecha_na", name:"fecha_na", label: "Fecha de nacimiento", labelPosition:"top",  labelWidth:80, 
                    },
                    {
                        view: "text",id: "edad", name:"edad", label: "Edad", labelPosition:"top",  labelWidth:80, required: "true",
                    },
					{
                        view: "text",id: "peso", name:"peso", label: "Peso Kg", labelPosition:"top",  labelWidth:80, required: "true",
                    },
					{
                        view: "text",id: "cama", name:"cama", label: "Cama", labelPosition:"top",  labelWidth:80, 

                    },
				]
			},
			{
                cols:[
					
					{
						view:"radio",
						id:"via",
						name:"via",
						label:"Via de administracion",
						labelPosition:"top",
						options:[
						  { id:"CEN", value:"Central" }, 
						  { id:"EPI", value:"Epidural" }, 
						  { id:"IM", value:"Intramuscular" }, 
						  { id:"IP", value:"Intraperitonial" }, 
						  { id:"PAR", value:"Parental" }, 
						  { id:"PER", value:"Periférica" }, 
						  { id:"PLE", value:"Pleural" }, 
						  { id:"PLE", value:"Subcutánea" }, 
						],
						value:"CEN"
					},
					
				]
			},
			{
				cols:[
					{
						view:"radio",
						id:"sexo",
						name:"sexo",
						label:"Sexo",
						labelPosition:"top",
						options:[
						  { id:1, value:"F" }, 
						  { id:2, value:"M" }, 
						],
						value:1
					},

					{
						view:"radio",
						id:"ale",
						name:"ale",
						label:"Alergias",
						labelPosition:"top",
						options:[
						  { id:1, value:"SI" }, 
						  { id:2, value:"NO" }, 
						],
						value:2,
						on:{
							onChange: function (newv, oldv){
									if(newv == 1){
										console.log("hola");
										 $$("medi_ale").hide()
									}
									if(newv == 2){
										console.log("adios");
										 $$("medi_ale").show()
									}
								}
							}
						
					},
					{
                        view: "text",id:"medi-ale", name:"medi-ale", label: "Medicamento de alergia", labelPosition:"top",  labelWidth:80, hidden:true, 

                    },

				]
			}

		]
	},
	

					},
		

			],


			},

			{
			
				cols: [
						{
							
							view: "fieldset",
						label: "Mezcla",
						body: {
							rows: [
								{
				  
	
					cols:[
	
						{ 
							view:"combo", 
							label: 'Tipo de mezcla',
							value:"2", 
							labelPosition:"top",
							labelWidth: 150,
							options:[
							{id:1, value:"NPT"},
							{id:2, value:"Oncológicos"},
							{id:3, value:"Antimicrobianos"}	
							]
						},
	
						{
							view: "text",id: "over", name:"over", label: "Overfill", labelPosition:"top",  labelWidth:150, 
	
						},
						{
							view: "text",id: "volto", name:"volto", label: "Vol. Total", labelPosition:"top",  labelWidth:150, hidden: "true" 
	
						},
						{
							view: "text",id: "velinf", name:"velinf", label: "Vel. Infusion", labelPosition:"top",  labelWidth:150, hidden:"true",
	
						},
						

	
					]
				  },
	
				  {
					cols:[
						{
							view:"button",id:"cmdAgregar", value:"+", css: "webix_primary", minWidth:100, popup:"popupComponentes",
							// click: ()=>{showPopUp("popupComponentes")}
						},
						{
							view:"button", label:"-", css: "webix_danger", minWidth:100, popup:"popupArticuloss",
							//click: guardar
						},
						
						
	
					
					]
				}
			]
		},
		
	
						},
			
	
				],
	
	
				},

		
		],
	},
	{
		paddingX:10, borderless:true,
						cols:[{
							view: "datatable", id: "dtable", select: "row", editaction: "dblclick", rowCss: "#css#",type:"excel", minHeight:280,
							math: true,scrollY: true,scrollX: true,resizeColumn: true,resizeRow: true,navigation: true,
		  				editable: true,borderless: false,fixedRowHeight: false,rowLineHeight: 25, rowHeight: 25,
							columns: [
					{
			          id: "marcar",

			          header: [{text:"", css:"my_style"}, {
			            content: "selectFilter"
			          }],
			          template: "{common.checkbox()}",width: 50,
			          // footer: {
			          //   colspan: "6", content: "rowCount",css: "footer"
			          // }
			        },
			        {
			          id: "serie_arti", width: 200,sort: "string",css: { 'text-align': 'left' },
			          header: [{text:"Numero de serie",css:"my_style"}, {
			            content: "textFilter", placeholder:"Filtrar",
			          }],
			        },
					{
			          id: "compo", width: 100,sort: "int", css: { 'text-align': 'left' },
			          header: [{text:"Componente",css:"my_style"}, {
			            content: "textFilter", placeholder:"Filtrar",
			          }],
			        },
			        {
			          id: "id_arti_barr", width: 120,sort: "string",css: { 'text-align': 'left' }, hidden:true,
			          header: [{text:"",css:"my_style"}, {
			            content: "textFilter", placeholder:"Filtrar",
			          }],
			        },
					{
			          id: "conc", width: 285,sort: "string", css: { 'text-align': 'left' },
			          header: [{text:"Concentracion",css:"my_style"}, {
			            content: "textFilter", placeholder:"",
			          }],
			        },
			        {
			          id: "vol", width: 385,sort: "string", css: { 'text-align': 'left' },
			          header: [{text:"Volumen",css:"my_style"}, {
			            content: "textFilter", placeholder:"Filtrar",
			          }],
			        },
					{
			          id: "solu", width: 150,sort: "string", css: { 'text-align': 'left' },
			          header: [{text:"Solucion",css:"my_style"}, {
			            content: "textFilter", placeholder:"",
			          }],
			        },
			        {
			          id: "cuando", width: 150,sort: "string", css: { 'text-align': 'left' },
			          header: [{text:"Cada cuando",css:"my_style"}, {
			            content: "textFilter", placeholder:"Filtrar",
			          }],
			        },
					{
			          id: "bolos", width: 150,sort: "string", css: { 'text-align': 'left' },
			          header: [{text:"Bolos",css:"my_style"}, {
			            content: "textFilter", placeholder:"Filtrar",
			          }],
			        },
			       

			        ],
			        on:{
			        	onAfterAdd:()=>{
			        		$$("dtable").adjustRowHeight();
			        	}
			        }
				}]
	},	{ margin:5, cols:[
				
				
		{ view:"button", value:"Guardar" , css:"webix_primary"},
		{ view:"button", value:"Cancel"}
	]},
			]	
	}

	
		
	
};


webix.ui({
	view:"window", id:"popupComponentes", align:"center",
	head:{
		cols:[
			{template: "Agregar componente a la mezcla", type:"header", borderless:true},
			{align:"right", view:"button", label:"x", width:32, click:()=>{$$("popupComponentes").hide()}}
		]
	 
	},
	body:{
	  view:"form",
	  id:"frmArti",
	  margin:-2,
	  width:550,
	  height:400,
	  scroll:"Y",
	  elements:[{

		  rows:[
			{ 
				view:"combo", 
				label: 'Componente',
				id:"compo",
				name:"compo",
				value:"One", 
				labelPosition:"top",
				labelWidth: 150,
				options:[
					{id:1, value:"Ibuprofeno"},
					{id:2, value:"Paracetamol"},
					{id:3, value:"Clonazepam"}
				]
			},
			{
				view: "text",id: "conc", name:"conc", label: "Concentracion", labelPosition:"top",  labelWidth:150, required: "true",
			},
			{
				view: "text",id: "vol", name:"vol", label: "Volumen", labelPosition:"top",  labelWidth:150, required: "true",
			},
			{
				view: "text",id: "solu", name:"solu", label: "Solución/Divolvente", labelPosition:"top",  labelWidth:150, required: "true",
			},
			{
				view: "combo",id: "cuando", name:"cuando", label: "Cada/h", labelPosition:"top",  labelWidth:150, required: "true",
				options:[
					{id:1, value:"6h"},
					{id:2, value:"8h"},
					{id:3, value:"12h"},
					{id:4, value:"24h"},
					]
			},
			{
				view: "counter",id: "bolos", name:"bolos", label: "Bolos", labelPosition:"top",  labelWidth:150, required: "true",
				
			},
			
			{ view:"button", value:"Agregar", css:"webix_secondary", click:agregar},
			{ view:"button", value:"Cancel", css:"webix_danger"},
			
		  ]
		}]
	}
})


	
		

		function agregar(){
			let data = $$("frmArti").getValues();
	

			data.compo = $$("compo").getText();
			data.conc = $$("conc").getValue();
			data.vol = $$("vol").getValue();
			data.depe = $$("solu").getValue();
			data.justi = $$("cuando").getValue();
			data.modelo = $$("bolos").getValue();

			$$("dtable").add(data); //agrega el objeto al data table

			$$("popupComponentes").hide();
		}
  
		
	  
	


function showPopUp(popup){
	$$(popup).show($$("cmdAgregar").$view, {pos:"right"});
}