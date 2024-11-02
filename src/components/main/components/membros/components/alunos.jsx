function ArrayAlunos ({index, Imagem, Nome}){
    return(
        <div
              key={index}
              className="w-[259px] h-[120px] rounded-[8px] p-[16px] gap-[8px] border border-[#0000001A] flex items-center justify-center"
            >
              <img
                src={Imagem}
                alt=""
                className="w-[88px] h-[88px] object-cover object-center rounded-full"
              />
              <hr className="border border-[#0000001A] h-full" />
              {Nome}
        </div>
    )
}

export default ArrayAlunos