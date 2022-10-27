#!/bin/sh

# Check if user invoke the script with root priviledge or not
if [ $(id -u) != 0 ]; then
	echo "Error: You need to run the script with root priviledge"
fi

# Synchronize mirrors and update the system
pacman -S --noconfirm && pacman -Syu --noconfirm
pacman -Scc --noconfirm # Cleanup previous cached files

# Install several other utilities
pacman -S --noconfirm catfish cmake geany gimp git ruby neofetch numlockx pavucontrol simplescreenrecorder rxvt-unicode tmux zip unzip p7zip zsh xclip wine
numlockx on

# Install pulseaudio lib32 for wine
pacman -S lib32-alsa-plugins lib32-libpulse lib32-openal 

# Install yay
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
## yay install go to compile itself,
## however, doesn't remove the pkg so we need to do it manually
pacman -Rs --noconfirm go

# Install fonts
## noto-fonts fonts
pacman -S noto-fonts noto-fonts-cjk noto-fonts-emoji noto-fonts-extra
## fira-sans fonts
pacman -S ttf-fira-sans
## source-code-pro fonts
curl -LO https://github.com/ryanoasis/nerd-fonts/releases/latest/download/SourceCodePro.zip
mkdir ~/.fonts && mv SourceCodePro.zip ~/.fonts
unzip ~/.fonts/SourceCodePro.zip && rm ~/.fonts/SourceCodePro.zip
rm ~/.fonts/*.txt && rm ~/.fonts/*.md
fc-cache -f

# Install and setup oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
yes | cp .zshrc ~/.zshrc
source ~/.zshrc

# Install VSCode
curl -L https://code.visualstudio.com/sha/download\?build\=stable\&os\=linux-x64 --output code.tar.gz
tar xf code.tar.xz
mv VSCode-linux-x64 /opt
source ~/.zshrc

# I've not install ruby yet, so I'd prefer to configure ruby manually
export PATH=~/.local/share/gem/ruby/$(ls ~/.local/share/gem/ruby | awk '{if ($1 > L){L = $1}} END {print L}')/bin:$PATH
source ~/.zshrc
gem install bundle bundler

# Configure others
## htop
mkdir ~/.config/htop
cp .config/htop/* ~/.config/htop/

## neofetch
rm ~/.config/neofetch/*
cp .config/neofetch/* ~/.config/neofetch/

## xfce4 terminal
rm ~/.config/xfce4/terminal/*
cp .config/xfce4/terminal/* ~/.config/xfce4/terminal/

# Copy .Xresources file for Urxvt
rm ~/.Xresources
cp .Xresources ~/.
