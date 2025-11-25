#!/bin/bash

# Variablen anpassen
KEY_NAME="id_rsa_azure_devops"
EMAIL="super-duper-email@your-super-domain.com"

# Pfad zum Schlüssel
KEY_PATH="$HOME/.ssh/$KEY_NAME"

# SSH-Key generieren (RSA 4096 Bit) mit Kommentar und ohne Passphrase
ssh-keygen -t rsa -b 4096 -C "$EMAIL" -f "$KEY_PATH" -N ""

# SSH-Agent starten und Schlüssel hinzufügen
eval "$(ssh-agent -s)"
ssh-add "$KEY_PATH"

# Öffentlichen Schlüssel ausgeben zum Kopieren und Hochladen in Azure DevOps
echo "Dein öffentlicher SSH-Schlüssel (kopieren und in Azure DevOps einfügen):"
cat "${KEY_PATH}.pub"

# neuen key zum SSH-Client hinzufügen
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa_azure_devops

# SSH-Konfiguration für Azure DevOps automatisch eintragen
cat <<EOF >> ~/.ssh/config
Host ssh.dev.azure.com
  HostName ssh.dev.azure.com
  User git
  IdentityFile ~/.ssh/id_rsa_azure_devops
  IdentitiesOnly yes
  PubkeyAcceptedKeyTypes +ssh-rsa,ssh-ed25519
  HostkeyAlgorithms +ssh-rsa,ssh-ed25519
EOF

chmod 600 ~/.ssh/config

 