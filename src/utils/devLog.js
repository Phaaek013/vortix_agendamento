// src/utils/devLog.js

/**
 * Log de desenvolvimento — só executa em DEV, não polui produção.
 * Use para placeholders de ações ainda não implementadas.
 */
export function devWarn(...args) {
  if (import.meta.env.DEV) {
    console.warn(...args);
  }
}
