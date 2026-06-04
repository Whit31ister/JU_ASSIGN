# CSCU Assignment Unit 2 Answers

(Based on Assignment Unit-2) 

---

# SECTION A

## 1. Define encryption and explain the difference between symmetric and asymmetric encryption algorithms.

Encryption is the process of converting readable data (plaintext) into an unreadable form (ciphertext) to protect it from unauthorized access. It ensures confidentiality and security during data storage and transmission. Symmetric encryption uses a single key for both encryption and decryption, making it faster and suitable for large amounts of data. Asymmetric encryption uses two keys, a public key and a private key, providing enhanced security for communication and authentication. Examples include AES and RSA respectively.

---

## 2. What is social engineering? Provide two examples of social engineering attacks and explain how they exploit human psychology.

Social engineering is a cyberattack technique that manipulates people into revealing sensitive information or performing actions that compromise security. Attackers exploit human emotions such as trust, fear, urgency, or curiosity. One example is phishing, where fraudulent emails trick users into revealing passwords. Another example is pretexting, where attackers impersonate trusted individuals to obtain confidential information. These attacks succeed because they target human behavior rather than technical vulnerabilities.

---

## 3. Explain the term "phishing" and discuss two common indicators of a phishing email.

Phishing is a cyberattack in which attackers impersonate legitimate organizations to steal personal information such as usernames, passwords, or banking details. One common indicator of a phishing email is a suspicious sender address that differs slightly from the legitimate organization. Another indicator is urgent or threatening language designed to pressure users into immediate action. Poor grammar, unexpected attachments, and suspicious links are additional signs that an email may be fraudulent.

---

## 4. Define malware and provide examples of two types of malware. Briefly describe how each type of malware operates.

Malware refers to malicious software designed to damage systems, steal information, or gain unauthorized access to devices. A virus is a type of malware that attaches itself to files and spreads when infected files are executed. A worm is another type of malware that self-replicates and spreads across networks without requiring user interaction. Both can cause significant damage, disrupt operations, and compromise sensitive information if not detected and removed promptly.

---

## 5. What is the purpose of a firewall in network security? Describe two different types of firewalls commonly used in cybersecurity.

A firewall is a security mechanism that monitors and controls network traffic based on predefined security rules. Its primary purpose is to prevent unauthorized access while allowing legitimate communication. A packet filtering firewall examines individual packets based on IP addresses and port numbers. A stateful inspection firewall monitors active connections and evaluates traffic based on the context of established sessions. Firewalls are essential for protecting networks from cyber threats and unauthorized intrusions.

---

# SECTION B

## 1. Discuss the importance of access control in maintaining cybersecurity. Explain the difference between discretionary access control and mandatory access control, providing examples of each.

Access control is a fundamental cybersecurity mechanism that ensures only authorized users can access specific resources and information. It helps protect sensitive data, prevents unauthorized activities, and reduces the risk of data breaches.

**Discretionary Access Control (DAC)** allows resource owners to determine who can access their files or resources. Users have the flexibility to grant or revoke permissions. For example, a document owner in a company may share a file with selected colleagues.

**Mandatory Access Control (MAC)** is a stricter security model where access permissions are determined by system administrators according to predefined security policies. Users cannot modify these permissions. For example, military systems use classification levels such as Confidential, Secret, and Top Secret to restrict access.

DAC offers flexibility but may increase security risks due to user-controlled permissions. MAC provides stronger security but is less flexible. Both models play important roles depending on organizational security requirements.

---

## 2. Explain the concept of encryption key management. Discuss two key management practices that organizations can implement to enhance the security of their cryptographic keys.

Encryption key management refers to the processes involved in generating, storing, distributing, rotating, and destroying cryptographic keys throughout their lifecycle. Since encrypted data is only as secure as its keys, proper key management is critical for maintaining data security.

One important practice is **secure key storage**. Organizations should store keys in Hardware Security Modules (HSMs) or encrypted key management systems rather than in plain text. This reduces the risk of unauthorized access.

Another practice is **key rotation and renewal**. Regularly replacing encryption keys limits the impact of key compromise and ensures long-term security. Organizations should establish policies for periodic key updates and immediate replacement when compromise is suspected.

Additional practices include access controls, backup procedures, and auditing of key usage. Effective key management strengthens cryptographic security and helps organizations protect sensitive information from cyber threats.

---

## 3. What is a Denial of Service (DoS) attack? Describe three different types of DoS attacks and explain how they can be mitigated.

A Denial of Service (DoS) attack is a cyberattack designed to make a system, service, or network unavailable to legitimate users by overwhelming it with excessive traffic or requests. The objective is to exhaust system resources and disrupt normal operations.

One type is a **Flood Attack**, where attackers send massive amounts of traffic to consume bandwidth and processing resources.

A **SYN Flood Attack** exploits the TCP handshake process by sending numerous connection requests without completing them, exhausting server resources.

An **Application Layer Attack** targets specific applications or services using seemingly legitimate requests to overload the server.

Mitigation strategies include implementing firewalls, rate limiting, intrusion detection systems, load balancing, and traffic filtering. Organizations may also use DDoS protection services and Content Delivery Networks (CDNs) to absorb malicious traffic and maintain service availability.

---

# SECTION C

## 1. Discuss the significance of threat intelligence in cybersecurity. Explain how organizations can leverage threat intelligence to enhance their security posture, providing examples of threat intelligence sources.

Threat intelligence is the collection, analysis, and interpretation of information related to current and emerging cyber threats. It helps organizations understand attacker tactics, identify vulnerabilities, and make informed security decisions. Rather than reacting to attacks after they occur, threat intelligence enables proactive defense strategies.

Threat intelligence improves security posture by helping organizations identify indicators of compromise, detect suspicious activities, prioritize vulnerabilities, and strengthen security controls. Security teams can use intelligence data to improve monitoring systems, update intrusion detection rules, and develop more effective incident response plans. It also assists in predicting future threats and understanding the techniques used by cybercriminals.

Threat intelligence is generally categorized into strategic, tactical, operational, and technical intelligence. Each type provides valuable insights for decision-making and threat mitigation.

Common sources of threat intelligence include government cybersecurity agencies, security vendors, threat intelligence platforms, security research organizations, industry information-sharing groups, and open-source intelligence (OSINT) sources. Examples include CERT advisories, threat feeds, vulnerability databases, security blogs, and dark web monitoring services.

By leveraging accurate and timely threat intelligence, organizations can improve risk management, enhance threat detection capabilities, reduce incident response times, and better protect critical assets from evolving cyber threats.

---

## 2. Explain the role of Intrusion Detection Systems (IDS) in network security. Compare and contrast host-based IDS and network-based IDS, discussing their advantages and limitations.

An Intrusion Detection System (IDS) is a security solution designed to monitor systems and networks for malicious activities, policy violations, or unauthorized access attempts. Its primary purpose is to detect suspicious behavior and generate alerts so that security teams can respond promptly to potential threats.

A **Host-Based Intrusion Detection System (HIDS)** operates on individual devices such as servers, workstations, or endpoints. It monitors system logs, file integrity, user activities, and operating system events. HIDS can detect attacks targeting a specific host and provides detailed information about local activities. However, it requires installation and maintenance on every protected device and may consume system resources.

A **Network-Based Intrusion Detection System (NIDS)** monitors network traffic across multiple devices. It analyzes packets traveling through the network to identify suspicious patterns, malware, and attack signatures. NIDS provides broad network visibility and can protect multiple systems simultaneously. However, encrypted traffic may reduce its effectiveness, and it may not detect attacks occurring solely within a host.

Both HIDS and NIDS are valuable security tools. Organizations often deploy them together to achieve comprehensive visibility, improve threat detection, and strengthen overall network security.

---

## 3. Outline the steps involved in developing a comprehensive cybersecurity policy for an organization. Discuss the key components that should be included in such a policy to effectively mitigate cybersecurity risks.

A cybersecurity policy is a formal document that defines an organization's security objectives, responsibilities, rules, and procedures for protecting information assets. Developing a comprehensive cybersecurity policy is essential for reducing risks, ensuring compliance, and maintaining business continuity.

The first step is **risk assessment**, where the organization identifies critical assets, vulnerabilities, and potential threats. The second step is defining security objectives and establishing policies that align with business requirements and regulatory standards. The third step involves assigning roles and responsibilities to employees, managers, and security personnel. The policy should then be documented, communicated to all stakeholders, and supported through training programs.

Key components of a cybersecurity policy include access control policies, password management guidelines, data classification procedures, encryption requirements, acceptable use policies, incident response procedures, backup and recovery strategies, remote access controls, and compliance requirements. Security awareness training should also be included to educate employees about cyber threats and safe practices.

The policy should be reviewed and updated regularly to address evolving threats and technological changes. A well-designed cybersecurity policy creates a security-focused culture, improves compliance, reduces vulnerabilities, and helps organizations effectively manage cybersecurity risks.

---
