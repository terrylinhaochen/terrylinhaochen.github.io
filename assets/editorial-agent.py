#!/usr/bin/env python3
"""
Editorial Agent for Terry Chen's Publishing Platform

A comprehensive editorial review tool that evaluates markdown drafts against 
editorial guidelines to ensure high-quality, authentic content for early 
professionals and tech industry workers.

Usage:
    python editorial-agent.py <draft-file> [--output OUTPUT_FILE] [--verbose]

Author: Terry Chen
License: MIT
"""

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Tuple
import json
from datetime import datetime


@dataclass
class EditorialIssue:
    """Represents an editorial issue found in the content."""
    category: str
    severity: str  # "critical", "important", "minor"
    line_number: int
    original_text: str
    issue_description: str
    suggested_fix: str
    rationale: str


@dataclass
class SparkAssessment:
    """Represents the spark assessment results."""
    scenario: str  # "A", "B", or "C"
    diagnosis: str
    current_opening: str
    suggested_rewrite: str
    rationale: str


@dataclass
class EditorialReport:
    """Complete editorial evaluation report."""
    file_path: str
    timestamp: str
    word_count: int
    spark_assessment: SparkAssessment
    structural_issues: List[EditorialIssue]
    principle_adherence: Dict[str, str]
    critical_fixes: List[EditorialIssue]
    line_level_refinements: List[EditorialIssue]
    implementation_roadmap: List[str]
    final_impact_assessment: str


class EditorialAgent:
    """Main editorial agent class for evaluating content."""
    
    def __init__(self, verbose: bool = False):
        self.verbose = verbose
        self.content = ""
        self.lines = []
        self.word_count = 0
        
        # Editorial guidelines patterns
        self.passive_voice_patterns = [
            r'\b(is|are|was|were|being|been|be)\s+\w+ed\b',
            r'\b(is|are|was|were|being|been|be)\s+\w+en\b',
            r'\bwill be\s+\w+ed\b',
            r'\bhas been\s+\w+ed\b',
            r'\bhave been\s+\w+ed\b'
        ]
        
        self.redundant_patterns = [
            r'\b(in order to|so as to)\b',
            r'\b(due to the fact that|owing to the fact that)\b',
            r'\b(at this point in time|at the present time)\b',
            r'\b(it is important to note that|it should be noted that)\b',
            r'\b(the fact that|the reality that)\b'
        ]
        
        self.weak_openings = [
            r'^\s*In today\'s world',
            r'^\s*In recent years',
            r'^\s*It is clear that',
            r'^\s*Many people believe',
            r'^\s*There is no doubt',
            r'^\s*It goes without saying'
        ]

    def load_content(self, file_path: str) -> bool:
        """Load and parse markdown content from file."""
        try:
            path = Path(file_path)
            if not path.exists():
                print(f"Error: File '{file_path}' not found.")
                return False
            
            with open(path, 'r', encoding='utf-8') as f:
                self.content = f.read()
            
            self.lines = self.content.split('\n')
            self.word_count = len(self.content.split())
            
            if self.verbose:
                print(f"Loaded content: {len(self.lines)} lines, {self.word_count} words")
            
            return True
        except Exception as e:
            print(f"Error loading file: {e}")
            return False

    def assess_spark(self) -> SparkAssessment:
        """Phase 1: Assess the opening spark according to scenarios A/B/C."""
        if not self.content.strip():
            return SparkAssessment("C", "Empty content", "", "", "No content to evaluate")
        
        # Extract first 150 words for opening analysis
        words = self.content.split()
        opening_words = words[:150] if len(words) >= 150 else words
        opening_text = ' '.join(opening_words)
        
        # Remove markdown formatting for analysis
        clean_opening = re.sub(r'[#*_`\[\]]', '', opening_text)
        
        # Check for weak opening patterns
        has_weak_opening = any(re.search(pattern, clean_opening, re.IGNORECASE) 
                              for pattern in self.weak_openings)
        
        # Look for compelling elements throughout the piece
        compelling_indicators = [
            r'\b(surprising|unexpected|counterintuitive|reveals|discovered)\b',
            r'\b(but here\'s the thing|however|yet|despite)\b',
            r'\b(what if|imagine|consider)\b',
            r'\?\s*$'  # Questions
        ]
        
        has_compelling_start = any(re.search(pattern, opening_text, re.IGNORECASE) 
                                  for pattern in compelling_indicators[:100])  # First 100 words
        
        has_compelling_later = any(re.search(pattern, self.content, re.IGNORECASE) 
                                  for pattern in compelling_indicators)
        
        # Scenario determination
        if has_compelling_start and not has_weak_opening:
            scenario = "A"
            diagnosis = "Strong opening with compelling hook present"
            rewrite = "Opening is effective. Consider minor refinements for voice and flow."
            rationale = "The opening demonstrates immediate engagement and establishes clear stakes."
        elif has_compelling_later and not has_compelling_start:
            scenario = "B"
            diagnosis = "Compelling elements exist but are buried in the content"
            # Find the compelling content and suggest moving it up
            rewrite = "Move the most compelling insight from later in the piece to the opening paragraph."
            rationale = "Reader engagement requires immediate hook. Compelling content should lead, not follow."
        else:
            scenario = "C"
            diagnosis = "Opening needs sharpening - lacks immediate compelling hook"
            rewrite = self._generate_spark_rewrite(opening_text)
            rationale = "Opening must establish immediate stakes and forward momentum to engage target audience."
        
        return SparkAssessment(scenario, diagnosis, opening_text, rewrite, rationale)

    def _generate_spark_rewrite(self, opening_text: str) -> str:
        """Generate a rewritten opening with better spark."""
        # This is a simplified rewrite suggestion - in practice, this would be more sophisticated
        return ("Consider opening with a specific observation, question, or counterintuitive insight "
                "that immediately engages early tech professionals. Avoid generic statements and "
                "focus on what makes this topic relevant to their daily experience.")

    def analyze_structure(self) -> List[EditorialIssue]:
        """Phase 2: Analyze structural elements."""
        issues = []
        
        # Check introduction rhythm and timing
        first_150_words = ' '.join(self.content.split()[:150])
        
        # Stakes establishment check
        stakes_indicators = [
            r'\b(important|crucial|critical|matters|significance)\b',
            r'\b(why this matters|here\'s why|the stakes)\b',
            r'\b(impact|consequence|result|outcome)\b'
        ]
        
        has_stakes = any(re.search(pattern, first_150_words, re.IGNORECASE) 
                        for pattern in stakes_indicators)
        
        if not has_stakes:
            issues.append(EditorialIssue(
                category="Structure",
                severity="critical",
                line_number=1,
                original_text=first_150_words[:100] + "...",
                issue_description="Stakes not established within first 150 words",
                suggested_fix="Add clear statement of why this topic matters to early tech professionals",
                rationale="Reader engagement requires immediate understanding of relevance and impact"
            ))
        
        # Thesis clarity check
        thesis_patterns = [
            r'\b(I argue|my thesis|the key insight|the central point)\b',
            r'\b(this suggests|this means|the implication)\b'
        ]
        
        has_clear_thesis = any(re.search(pattern, self.content, re.IGNORECASE) 
                              for pattern in thesis_patterns)
        
        if not has_clear_thesis:
            issues.append(EditorialIssue(
                category="Structure",
                severity="important",
                line_number=self._find_thesis_location(),
                original_text="Thesis statement unclear",
                issue_description="Forward-pointing thesis not clearly articulated",
                suggested_fix="Add explicit thesis statement that previews the argument's direction",
                rationale="Readers need clear roadmap of where the argument is headed"
            ))
        
        # Ending analysis - check for recapping vs reframing
        last_paragraph = self._get_last_paragraph()
        recap_indicators = [
            r'\b(in conclusion|to summarize|in summary|to recap)\b',
            r'\b(as we have seen|as discussed|as mentioned)\b'
        ]
        
        has_recap_ending = any(re.search(pattern, last_paragraph, re.IGNORECASE) 
                              for pattern in recap_indicators)
        
        if has_recap_ending:
            issues.append(EditorialIssue(
                category="Structure",
                severity="important",
                line_number=len(self.lines),
                original_text=last_paragraph,
                issue_description="Ending recaps rather than reframes",
                suggested_fix="Replace recap with new perspective or forward-looking insight",
                rationale="Endings should offer fresh perspective, not repeat what was already said"
            ))
        
        # Abstraction grounding check
        abstract_terms = [
            'innovation', 'disruption', 'transformation', 'optimization',
            'synergy', 'paradigm', 'ecosystem', 'scalability'
        ]
        
        for term in abstract_terms:
            if term in self.content.lower():
                # Check if term is grounded with examples
                term_context = self._get_context_around_term(term)
                if not self._has_concrete_examples(term_context):
                    line_num = self._find_term_line(term)
                    issues.append(EditorialIssue(
                        category="Structure",
                        severity="minor",
                        line_number=line_num,
                        original_text=term_context,
                        issue_description=f"Abstract term '{term}' not grounded in concrete examples",
                        suggested_fix=f"Add specific example or case study to illustrate '{term}'",
                        rationale="Abstract concepts must be anchored in concrete details for clarity"
                    ))
        
        return issues

    def check_principle_adherence(self) -> Dict[str, str]:
        """Phase 3: Check adherence to core principles."""
        adherence = {}
        
        # Optimistic Realism Check
        cynical_patterns = [
            r'\b(obviously|clearly|everyone knows)\b',
            r'\b(impossible|hopeless|pointless|useless)\b',
            r'\b(always fails|never works|doomed to fail)\b'
        ]
        
        cynical_language = []
        for pattern in cynical_patterns:
            matches = re.finditer(pattern, self.content, re.IGNORECASE)
            cynical_language.extend([match.group() for match in matches])
        
        if cynical_language:
            adherence["Optimistic Realism"] = (
                f"ISSUE: Cynical language detected: {', '.join(cynical_language[:3])}. "
                "Replace with balanced, realistic assessment that maintains hope."
            )
        else:
            adherence["Optimistic Realism"] = "GOOD: Tone maintains optimistic realism"
        
        # Intellectual Generosity Check
        alienating_patterns = [
            r'\b(idiots|stupid|moronic|obviously wrong)\b',
            r'\b(anyone who thinks|people who believe)\b.*\b(wrong|mistaken|foolish)\b'
        ]
        
        alienating_language = []
        for pattern in alienating_patterns:
            matches = re.finditer(pattern, self.content, re.IGNORECASE)
            alienating_language.extend([match.group() for match in matches])
        
        if alienating_language:
            adherence["Intellectual Generosity"] = (
                f"ISSUE: Alienating language detected: {', '.join(alienating_language[:2])}. "
                "Reframe to invite rather than exclude readers."
            )
        else:
            adherence["Intellectual Generosity"] = "GOOD: Language invites rather than alienates"
        
        # Conversational Authority Check
        authority_indicators = [
            r'\b(I believe|in my experience|from what I\'ve seen)\b',
            r'\b(research shows|studies indicate|evidence suggests)\b'
        ]
        
        has_authority = any(re.search(pattern, self.content, re.IGNORECASE) 
                           for pattern in authority_indicators)
        
        overconfident_patterns = [
            r'\b(definitely|absolutely|without doubt|guaranteed)\b',
            r'\b(the only way|the best solution|the right answer)\b'
        ]
        
        is_overconfident = any(re.search(pattern, self.content, re.IGNORECASE) 
                              for pattern in overconfident_patterns)
        
        if is_overconfident:
            adherence["Conversational Authority"] = (
                "ISSUE: Overly confident language. Balance certainty with appropriate humility."
            )
        elif not has_authority:
            adherence["Conversational Authority"] = (
                "ISSUE: Lacks authoritative grounding. Add experience or evidence-based support."
            )
        else:
            adherence["Conversational Authority"] = "GOOD: Balanced confidence with humility"
        
        return adherence

    def identify_critical_fixes(self) -> List[EditorialIssue]:
        """Phase 4: Identify critical structural issues requiring fixes."""
        critical_issues = []
        
        # Find all issues marked as critical from structure analysis
        structural_issues = self.analyze_structure()
        critical_issues.extend([issue for issue in structural_issues if issue.severity == "critical"])
        
        # Add evidence gaps as critical issues
        unsupported_claims = self._find_unsupported_claims()
        for claim in unsupported_claims:
            critical_issues.append(EditorialIssue(
                category="Evidence",
                severity="critical",
                line_number=claim["line"],
                original_text=claim["text"],
                issue_description="Unsupported claim requires evidence",
                suggested_fix="Add credible source or cite leading company example",
                rationale="All arguments must be supported by credible sources from authoritative sources"
            ))
        
        return critical_issues

    def line_level_refinements(self) -> List[EditorialIssue]:
        """Phase 5: Systematic line-level audit."""
        refinements = []
        
        # Passive voice detection
        for i, line in enumerate(self.lines):
            for pattern in self.passive_voice_patterns:
                matches = re.finditer(pattern, line, re.IGNORECASE)
                for match in matches:
                    active_version = self._convert_to_active_voice(match.group(), line)
                    refinements.append(EditorialIssue(
                        category="Voice",
                        severity="minor",
                        line_number=i + 1,
                        original_text=match.group(),
                        issue_description="Passive voice construction",
                        suggested_fix=active_version,
                        rationale="Active voice is more direct and engaging"
                    ))
        
        # Redundant language detection
        for i, line in enumerate(self.lines):
            for pattern in self.redundant_patterns:
                matches = re.finditer(pattern, line, re.IGNORECASE)
                for match in matches:
                    concise_version = self._make_concise(match.group(), line)
                    refinements.append(EditorialIssue(
                        category="Conciseness",
                        severity="minor",
                        line_number=i + 1,
                        original_text=match.group(),
                        issue_description="Redundant language",
                        suggested_fix=concise_version,
                        rationale="Every idea must be essential; eliminate redundant language"
                    ))
        
        # Jargon identification
        tech_jargon = [
            'synergistic', 'paradigm shift', 'disruptive innovation',
            'best practices', 'low-hanging fruit', 'move the needle'
        ]
        
        for i, line in enumerate(self.lines):
            for jargon in tech_jargon:
                if jargon.lower() in line.lower():
                    refinements.append(EditorialIssue(
                        category="Clarity",
                        severity="minor",
                        line_number=i + 1,
                        original_text=jargon,
                        issue_description="Undefined jargon",
                        suggested_fix=f"Define '{jargon}' or replace with clearer language",
                        rationale="Avoid jargon without clear definition for target audience"
                    ))
        
        return refinements

    def generate_implementation_roadmap(self, report: EditorialReport) -> List[str]:
        """Generate step-by-step revision sequence in priority order."""
        roadmap = []
        
        # Priority 1: Spark fixes
        if report.spark_assessment.scenario in ["B", "C"]:
            roadmap.append("1. IMMEDIATE: Fix opening spark - " + 
                          report.spark_assessment.diagnosis)
        
        # Priority 2: Critical structural issues
        critical_fixes = [issue for issue in report.critical_fixes if issue.severity == "critical"]
        if critical_fixes:
            roadmap.append("2. CRITICAL: Address structural issues:")
            for fix in critical_fixes:
                roadmap.append(f"   - {fix.issue_description}")
        
        # Priority 3: Principle adherence
        problematic_principles = [k for k, v in report.principle_adherence.items() 
                                 if v.startswith("ISSUE")]
        if problematic_principles:
            roadmap.append("3. IMPORTANT: Fix principle violations:")
            for principle in problematic_principles:
                roadmap.append(f"   - {principle}: {report.principle_adherence[principle]}")
        
        # Priority 4: Line-level refinements
        if report.line_level_refinements:
            roadmap.append("4. POLISH: Address line-level issues:")
            voice_issues = len([r for r in report.line_level_refinements if r.category == "Voice"])
            concise_issues = len([r for r in report.line_level_refinements if r.category == "Conciseness"])
            clarity_issues = len([r for r in report.line_level_refinements if r.category == "Clarity"])
            
            if voice_issues:
                roadmap.append(f"   - Convert {voice_issues} passive voice constructions")
            if concise_issues:
                roadmap.append(f"   - Eliminate {concise_issues} redundant phrases")
            if clarity_issues:
                roadmap.append(f"   - Clarify {clarity_issues} jargon terms")
        
        # Priority 5: Final review
        roadmap.append("5. FINAL: Re-read for flow, voice consistency, and authenticity")
        
        return roadmap

    def generate_impact_assessment(self, report: EditorialReport) -> str:
        """Generate final impact assessment."""
        total_issues = (len(report.structural_issues) + 
                       len(report.critical_fixes) + 
                       len(report.line_level_refinements))
        
        severity_breakdown = {
            "critical": len([i for i in report.critical_fixes if i.severity == "critical"]),
            "important": len([i for i in report.structural_issues if i.severity == "important"]),
            "minor": len([i for i in report.line_level_refinements if i.severity == "minor"])
        }
        
        assessment = f"""POST-REVISION IMPACT ASSESSMENT:

Quality Improvement: {total_issues} issues addressed across all editorial dimensions
- {severity_breakdown['critical']} critical structural fixes
- {severity_breakdown['important']} important improvements  
- {severity_breakdown['minor']} minor refinements

Audience Value: After implementing these revisions, the piece will:
1. Immediately engage early tech professionals with compelling opening
2. Provide clear value proposition and actionable insights
3. Maintain authentic voice while meeting professional standards
4. Demonstrate expertise without alienating readers

Platform Alignment: The revised piece will exemplify Every's commitment to:
- Authentic insight over surface-level observations
- Evidence-based arguments with credible sources
- Conversational authority that builds trust
- High-quality content that respects reader intelligence

Expected Engagement: Well-structured argument with concrete examples will increase:
- Reader retention through compelling narrative arc
- Social sharing due to valuable insights
- Authority establishment for Terry Chen's expertise
- Platform reputation for consistently high-quality content"""

        return assessment

    def evaluate_content(self, file_path: str) -> EditorialReport:
        """Main evaluation method that runs all phases."""
        if not self.load_content(file_path):
            return None
        
        if self.verbose:
            print("Running editorial evaluation...")
        
        # Phase 1: Spark Assessment
        spark_assessment = self.assess_spark()
        if self.verbose:
            print(f"Phase 1 complete: Spark scenario {spark_assessment.scenario}")
        
        # Phase 2: Structural Analysis
        structural_issues = self.analyze_structure()
        if self.verbose:
            print(f"Phase 2 complete: {len(structural_issues)} structural issues found")
        
        # Phase 3: Principle Adherence
        principle_adherence = self.check_principle_adherence()
        if self.verbose:
            print("Phase 3 complete: Principle adherence checked")
        
        # Phase 4: Critical Fixes
        critical_fixes = self.identify_critical_fixes()
        if self.verbose:
            print(f"Phase 4 complete: {len(critical_fixes)} critical fixes identified")
        
        # Phase 5: Line-Level Refinements
        line_level_refinements = self.line_level_refinements()
        if self.verbose:
            print(f"Phase 5 complete: {len(line_level_refinements)} refinements identified")
        
        # Generate report
        report = EditorialReport(
            file_path=file_path,
            timestamp=datetime.now().isoformat(),
            word_count=self.word_count,
            spark_assessment=spark_assessment,
            structural_issues=structural_issues,
            principle_adherence=principle_adherence,
            critical_fixes=critical_fixes,
            line_level_refinements=line_level_refinements,
            implementation_roadmap=[],
            final_impact_assessment=""
        )
        
        report.implementation_roadmap = self.generate_implementation_roadmap(report)
        report.final_impact_assessment = self.generate_impact_assessment(report)
        
        return report

    # Helper methods
    def _find_thesis_location(self) -> int:
        """Find approximate line number where thesis should appear."""
        return min(10, len(self.lines) // 4)  # Should be in first quarter, roughly

    def _get_last_paragraph(self) -> str:
        """Extract the last paragraph from content."""
        paragraphs = self.content.split('\n\n')
        return paragraphs[-1] if paragraphs else ""

    def _get_context_around_term(self, term: str) -> str:
        """Get context around a specific term."""
        # Find the sentence containing the term
        sentences = re.split(r'[.!?]+', self.content)
        for sentence in sentences:
            if term.lower() in sentence.lower():
                return sentence.strip()
        return ""

    def _has_concrete_examples(self, text: str) -> bool:
        """Check if text contains concrete examples."""
        example_indicators = [
            r'\b(for example|for instance|such as|like)\b',
            r'\b(consider|imagine|picture)\b',
            r'\b(company|startup|team|project)\b.*\b(did|built|created)\b'
        ]
        return any(re.search(pattern, text, re.IGNORECASE) for pattern in example_indicators)

    def _find_term_line(self, term: str) -> int:
        """Find line number containing specific term."""
        for i, line in enumerate(self.lines):
            if term.lower() in line.lower():
                return i + 1
        return 1

    def _find_unsupported_claims(self) -> List[Dict]:
        """Find claims that need evidence support."""
        claims = []
        claim_patterns = [
            r'\b(studies show|research indicates|experts believe)\b',
            r'\b(most companies|many organizations|the majority)\b',
            r'\b(it\'s clear that|obviously|evidently)\b'
        ]
        
        for i, line in enumerate(self.lines):
            for pattern in claim_patterns:
                if re.search(pattern, line, re.IGNORECASE):
                    # Check if followed by citation or source
                    if not re.search(r'\([^)]*\d{4}[^)]*\)|according to|source:', line, re.IGNORECASE):
                        claims.append({
                            "line": i + 1,
                            "text": line.strip()
                        })
        
        return claims

    def _convert_to_active_voice(self, passive_phrase: str, full_line: str) -> str:
        """Convert passive voice to active voice."""
        # Simplified conversion - in practice would be more sophisticated
        return f"Rewrite in active voice: '{passive_phrase}'"

    def _make_concise(self, redundant_phrase: str, full_line: str) -> str:
        """Make redundant phrase more concise."""
        concise_replacements = {
            "in order to": "to",
            "due to the fact that": "because",
            "at this point in time": "now",
            "it is important to note that": "",
            "the fact that": "that"
        }
        
        for verbose, concise in concise_replacements.items():
            if verbose.lower() in redundant_phrase.lower():
                return f"Replace with: '{concise}'"
        
        return f"Simplify: '{redundant_phrase}'"


class EditorialReportFormatter:
    """Formats editorial reports for output."""
    
    def format_report(self, report: EditorialReport) -> str:
        """Format complete editorial report."""
        output = []
        
        output.append("=" * 80)
        output.append("EDITORIAL EVALUATION REPORT")
        output.append("=" * 80)
        output.append(f"File: {report.file_path}")
        output.append(f"Generated: {report.timestamp}")
        output.append(f"Word Count: {report.word_count}")
        output.append("")
        
        # Spark Assessment
        output.append("SPARK ASSESSMENT")
        output.append("-" * 40)
        output.append(f"Scenario: {report.spark_assessment.scenario}")
        output.append(f"Diagnosis: {report.spark_assessment.diagnosis}")
        output.append("")
        output.append("Current Opening:")
        output.append(f'"{report.spark_assessment.current_opening[:200]}..."')
        output.append("")
        output.append("Suggested Approach:")
        output.append(report.spark_assessment.suggested_rewrite)
        output.append("")
        output.append(f"Rationale: {report.spark_assessment.rationale}")
        output.append("")
        
        # Structural Evaluation
        output.append("STRUCTURAL EVALUATION")
        output.append("-" * 40)
        if report.structural_issues:
            for issue in report.structural_issues:
                output.append(f"• {issue.issue_description}")
                output.append(f"  Line {issue.line_number}: {issue.original_text[:100]}...")
                output.append(f"  Fix: {issue.suggested_fix}")
                output.append(f"  Why: {issue.rationale}")
                output.append("")
        else:
            output.append("✓ No major structural issues detected")
            output.append("")
        
        # Principle Adherence
        output.append("PRINCIPLE ADHERENCE")
        output.append("-" * 40)
        for principle, assessment in report.principle_adherence.items():
            status = "✓" if assessment.startswith("GOOD") else "⚠"
            output.append(f"{status} {principle}: {assessment}")
        output.append("")
        
        # Critical Fixes
        output.append("CRITICAL FIXES")
        output.append("-" * 40)
        if report.critical_fixes:
            for i, fix in enumerate(report.critical_fixes, 1):
                output.append(f"{i}. {fix.issue_description}")
                output.append(f'   Quote: "{fix.original_text}"')
                output.append(f"   Problem: {fix.issue_description}")
                output.append(f"   Rewrite: {fix.suggested_fix}")
                output.append("")
        else:
            output.append("✓ No critical fixes required")
            output.append("")
        
        # Line-Level Refinements
        output.append("LINE-LEVEL REFINEMENTS")
        output.append("-" * 40)
        
        # Group refinements by category
        categories = {}
        for refinement in report.line_level_refinements:
            if refinement.category not in categories:
                categories[refinement.category] = []
            categories[refinement.category].append(refinement)
        
        for category, refinements in categories.items():
            output.append(f"{category} Issues ({len(refinements)}):")
            for ref in refinements[:5]:  # Show first 5 of each type
                output.append(f"  Line {ref.line_number}: {ref.original_text} → {ref.suggested_fix}")
            if len(refinements) > 5:
                output.append(f"  ... and {len(refinements) - 5} more {category.lower()} issues")
            output.append("")
        
        # Implementation Roadmap
        output.append("IMPLEMENTATION ROADMAP")
        output.append("-" * 40)
        for step in report.implementation_roadmap:
            output.append(step)
        output.append("")
        
        # Final Impact Assessment
        output.append("FINAL IMPACT ASSESSMENT")
        output.append("-" * 40)
        output.append(report.final_impact_assessment)
        
        return "\n".join(output)

    def format_summary(self, report: EditorialReport) -> str:
        """Format brief summary of key findings."""
        total_issues = (len(report.structural_issues) + 
                       len(report.critical_fixes) + 
                       len(report.line_level_refinements))
        
        critical_count = len([i for i in report.critical_fixes if i.severity == "critical"])
        
        summary = f"""EDITORIAL SUMMARY for {Path(report.file_path).name}
Spark: Scenario {report.spark_assessment.scenario} - {report.spark_assessment.diagnosis}
Issues: {total_issues} total ({critical_count} critical)
Priority: {report.implementation_roadmap[0] if report.implementation_roadmap else 'No major issues'}
"""
        return summary


def main():
    """Main CLI interface."""
    parser = argparse.ArgumentParser(
        description="Editorial Agent for Terry Chen's Publishing Platform",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
    python editorial-agent.py draft.md
    python editorial-agent.py draft.md --output report.txt
    python editorial-agent.py draft.md --verbose --output report.json
        """
    )
    
    parser.add_argument(
        "draft_file",
        help="Path to the markdown draft file to evaluate"
    )
    
    parser.add_argument(
        "--output", "-o",
        help="Output file path (optional, defaults to stdout)"
    )
    
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Enable verbose output during evaluation"
    )
    
    parser.add_argument(
        "--format", "-f",
        choices=["text", "json", "summary"],
        default="text",
        help="Output format (default: text)"
    )
    
    args = parser.parse_args()
    
    # Validate input file
    if not Path(args.draft_file).exists():
        print(f"Error: File '{args.draft_file}' not found.", file=sys.stderr)
        sys.exit(1)
    
    # Run evaluation
    agent = EditorialAgent(verbose=args.verbose)
    report = agent.evaluate_content(args.draft_file)
    
    if not report:
        print("Error: Failed to evaluate content.", file=sys.stderr)
        sys.exit(1)
    
    # Format output
    formatter = EditorialReportFormatter()
    
    if args.format == "json":
        # Convert to JSON (simplified for demo)
        output_data = {
            "file_path": report.file_path,
            "timestamp": report.timestamp,
            "word_count": report.word_count,
            "spark_scenario": report.spark_assessment.scenario,
            "total_issues": len(report.structural_issues) + len(report.critical_fixes) + len(report.line_level_refinements),
            "critical_fixes": len([i for i in report.critical_fixes if i.severity == "critical"]),
            "roadmap": report.implementation_roadmap
        }
        output_content = json.dumps(output_data, indent=2)
    elif args.format == "summary":
        output_content = formatter.format_summary(report)
    else:
        output_content = formatter.format_report(report)
    
    # Output results
    if args.output:
        try:
            with open(args.output, 'w', encoding='utf-8') as f:
                f.write(output_content)
            print(f"Editorial report saved to: {args.output}")
        except Exception as e:
            print(f"Error saving output: {e}", file=sys.stderr)
            sys.exit(1)
    else:
        print(output_content)


if __name__ == "__main__":
    main()