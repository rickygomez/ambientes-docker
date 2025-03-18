## configurando o zsh com o powerlevel10k e as minha preferências
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >> ~/.zshrc
wget https://raw.githubusercontent.com/rickygomez/ambientes-docker/main/configs/zsh/.p10k.zsh -O ~/.p10k.zsh
echo '[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh' >> ~/.zshrc

source ~/.bashrc
