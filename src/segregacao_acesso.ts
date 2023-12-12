export const segrecacaoAcesso = () => {
    setTimeout(() => {
        console.log('segrecacaoAcesso')
        const codigoPerfilLogado = Number(localStorage.getItem('perfil'))
        const paginaAtual: '/' = window.location.pathname as '/'
        
        const acessos: {[key: string]: {[key: string]: Array<number>}} = {
            '/': {
                adicionarTarefa: [1],
            }
        }
    
        Object.entries(acessos[paginaAtual]).forEach(([classFuncionalidade, perfisComAcesso]) => {
            if (!perfisComAcesso.includes(codigoPerfilLogado)) {
                const _elementos = document.getElementsByClassName(classFuncionalidade) as HTMLCollectionOf<HTMLElement>
               Array.from(_elementos).forEach((el) => {
                el.setAttribute('disabled', 'disabled')
                el.style.backgroundColor = 'gray'
               })
                
    
            }
        })
    
        
    
        
        console.log(codigoPerfilLogado)
    }, 300)
   
}