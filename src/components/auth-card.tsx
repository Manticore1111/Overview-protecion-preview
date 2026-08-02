"use client";

import Link from "next/link";
import { useState } from "react";

type AuthCardProps = {
  mode: "sign-in" | "register";
  errorMessage?: string;
  defaultPlanSlug?: string;
  action: (formData: FormData) => void | Promise<void>;
};

export function AuthCard({ mode, errorMessage, defaultPlanSlug, action }: AuthCardProps) {
  const isRegister = mode === "register";
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const rules = [
    { label: "Minimaal 8 tekens", passed: password.length >= 8 },
    { label: "Minimaal 1 hoofdletter", passed: /[A-Z]/.test(password) },
    { label: "Minimaal 1 kleine letter", passed: /[a-z]/.test(password) },
    { label: "Minimaal 1 cijfer", passed: /\d/.test(password) },
  ];

  return (
    <main className="grain page-shell min-h-screen overflow-hidden px-6 py-8 sm:px-8 lg:px-12">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl gap-6 lg:grid-cols-[0.98fr_1.02fr]">
        <section className="rounded-[2.3rem] bg-[#102033] p-8 text-white shadow-[0_32px_90px_rgba(16,32,51,0.24)] sm:p-10">
          <Link className="text-sm uppercase tracking-[0.28em] text-white/58" href="/">
            terug naar home
          </Link>
          <div className="mt-10 max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/58">klantaccount</p>
            <h1 className="display-font mt-5 text-5xl font-bold leading-[0.95] tracking-tight">
              {isRegister ? "Maak een klantaccount aan om je content en levering te beheren." : "Log in om je klantdashboard en levering te openen."}
            </h1>
            <p className="mt-5 text-base leading-7 text-white/74">
              Deze versie werkt zonder database en slaat accounttoegang veilig op in ondertekende cookies voor dit apparaat.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ["Snelle toegang", "Klanten kunnen zonder complexe backend direct inloggen en hun levering bekijken."],
              ["Wachtwoordcontrole", "Met bevestiging, regels en wijzigmogelijkheid in het dashboard."],
              ["Geen database", "Geschikt voor een lichte verkoopsite die toch accountgevoel geeft."],
              ["Direct klaar", "Koppel later altijd nog echte auth of een database als je wilt opschalen."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                <p className="display-font text-xl font-bold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel-strong relative flex items-center rounded-[2.3rem] p-6 sm:p-8 lg:p-10">
          <div className="ambient-grid" />
          <div className="relative mx-auto w-full max-w-md">
            <div className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 p-1">
              <Link
                className={`flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold transition ${
                  !isRegister ? "bg-[#102033] text-white" : "text-[#445365]"
                }`}
                href="/sign-in"
              >
                Inloggen
              </Link>
              <Link
                className={`flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold transition ${
                  isRegister ? "bg-[#102033] text-white" : "text-[#445365]"
                }`}
                href="/register"
              >
                Registreren
              </Link>
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-[#6a7685]">
              {isRegister ? "registreren" : "inloggen"}
            </p>
            <h2 className="display-font mt-4 text-4xl font-bold tracking-tight text-[#102033]">
              {isRegister ? "Open je klantportaal" : "Welkom terug"}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#566375]">
              {isRegister
                ? "Maak een account met wachtwoordverificatie en kies direct je voorkeursplan."
                : "Gebruik je e-mailadres en wachtwoord om je account op dit apparaat te openen."}
            </p>

            {errorMessage ? (
              <div className="mt-6 rounded-[1.4rem] border border-[#f4b49f] bg-[#fff1e9] px-4 py-3 text-sm leading-6 text-[#9a3f28]">
                {errorMessage}
              </div>
            ) : null}

            <form action={action} className="mt-8 space-y-5">
              {isRegister ? (
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#425163]" htmlFor="name">
                    Naam
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jouw naam"
                    className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[#102033] outline-none transition placeholder:text-[#8190a0] focus:border-[#102033]"
                  />
                </div>
              ) : null}

              <div>
                <label className="mb-2 block text-sm font-medium text-[#425163]" htmlFor="email">
                  E-mailadres
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jij@voorbeeld.nl"
                  className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[#102033] outline-none transition placeholder:text-[#8190a0] focus:border-[#102033]"
                />
              </div>

              {isRegister ? (
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#425163]" htmlFor="preferredPlanSlug">
                    Voorkeursplan
                  </label>
                  <select
                    id="preferredPlanSlug"
                    name="preferredPlanSlug"
                    defaultValue={defaultPlanSlug || "growth-club"}
                    className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[#102033] outline-none transition focus:border-[#102033]"
                  >
                    <option value="starter-pack">Starter Lead Kit</option>
                    <option value="growth-club">Coach Leadflow Club</option>
                    <option value="premium-vault">Authority Launch Vault</option>
                  </select>
                </div>
              ) : null}

              <div>
                <label className="mb-2 block text-sm font-medium text-[#425163]" htmlFor="password">
                  Wachtwoord
                </label>
                <div className="flex gap-2">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    placeholder="Voer een wachtwoord in"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[#102033] outline-none transition placeholder:text-[#8190a0] focus:border-[#102033]"
                  />
                  <button
                    className="rounded-2xl border border-[var(--line)] bg-white px-4 text-sm font-semibold text-[#102033]"
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                  >
                    {showPassword ? "Verberg" : "Toon"}
                  </button>
                </div>
              </div>

              {isRegister ? (
                <>
                  <div className="rounded-[1.5rem] border border-[var(--line)] bg-white/70 p-4 text-sm text-[#556374]">
                    <p className="mb-3 font-semibold text-[#102033]">Wachtwoordverificatie</p>
                    <ul className="space-y-2">
                      {rules.map((rule) => (
                        <li key={rule.label} className={rule.passed ? "text-[#0f8b8d]" : "text-[#6a7685]"}>
                          {rule.passed ? "• Klaar" : "• Nog nodig"} {rule.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#425163]" htmlFor="confirmPassword">
                      Bevestig wachtwoord
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        placeholder="Voer je wachtwoord opnieuw in"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[#102033] outline-none transition placeholder:text-[#8190a0] focus:border-[#102033]"
                      />
                      <button
                        className="rounded-2xl border border-[var(--line)] bg-white px-4 text-sm font-semibold text-[#102033]"
                        type="button"
                        onClick={() => setShowConfirmPassword((value) => !value)}
                      >
                        {showConfirmPassword ? "Verberg" : "Toon"}
                      </button>
                    </div>
                    {confirmPassword ? (
                      <p className={`mt-2 text-sm ${password === confirmPassword ? "text-[#0f8b8d]" : "text-[#c74420]"}`}>
                        {password === confirmPassword ? "Wachtwoorden komen overeen." : "Wachtwoorden komen nog niet overeen."}
                      </p>
                    ) : null}
                  </div>
                </>
              ) : null}

              <button
                className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
                type="submit"
              >
                {isRegister ? "Account aanmaken" : "Inloggen"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}