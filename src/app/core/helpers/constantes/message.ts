// Message champs obligatoire
export const MESSAGE_CHAMPS_OBLIGATOIRE = 'Veuillez remplir les champs obligatoire';

// titre dialog confirmation suppression
export const MESSAGE_SUPPRESSION_TITRE = 'Confirmer la suppresion';

// Message dialog confirmation suppression
export function MESSAGE_SUPPRESSION_DESCRIPTION(entity: string) {
  return 'Êtes-vous sûr de vouloir supprimer définitivement ' + entity + '?';
}

export const MESSAGE_SUPPRESSION_WAIT = 'La suppression est encours ...';
export const MESSAGE_SUPPRESSION_OK = `La suppression a été effectuée`;
export const MESSAGE_SUPPRESSION_KO = `La suppression a echoué`;
