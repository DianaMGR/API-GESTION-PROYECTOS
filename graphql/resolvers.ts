const resolvers ={
    Query:{
        Usuarios: async (parent, args)=>{
          const usuarios = [  
            {
                nombre: 'Diana',   
               },
               {
                   nombre: 'Milena',   
                  },
                ];
                return usuarios;
        },
           
        
    },
};

export { resolvers};