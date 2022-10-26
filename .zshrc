# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="universe"

plugins=(bundler git tmux ufw)

source $ZSH/oh-my-zsh.sh

# User configuration

export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
export EDITOR='vim'

# Compilation flags
export ARCHFLAGS="-arch x86_64"

# Configure pacman
alias pacclean="pacman -Scc"
alias pacinst="pacman -S"
alias pacrm="pacman -Rs"
alias paclist="pacman -Q"

# Overwrite "ls" with "exa"
alias ls="exa -al --color=always --group-directories-first"
alias la="exa -a --color=always --group-directories-first"
alias ll="exa -l --color=always --group-directories-first"
alias lt="exa -aT --color=always --group-directories-first"
alias lh="exa -a | grep "^\.""

# Configure grep and egrep
alias grep="grep --color=auto"
alias egrep="egrep --color=auto"

# Configure cp
alias cp="cp -i"
alias mv="mv -i"
alias rm="rm -i"

# Others
alias ex="exit"
alias exi="exit"

# git aliases
alias add="git add"
alias addall="git add ."
alias addup="git add -u"
alias branch="git branch"
alias clone="git clone"
alias commit="git commit -am"
alias fetch="git fetch"
alias pull="git pull origin"
alias push="git push origin"
alias gstatus="git status"

# Exported path
export PATH=/opt/VSCode-linux-x64:$PATH
